import pool from '../config/database.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT id, name, email, phone, role, created_at FROM users ORDER BY created_at DESC'
    );

    res.json({
      success: true,
      users: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Prevent deleting admin users
    const userCheck = await pool.query('SELECT role FROM users WHERE id = $1', [id]);
    if (userCheck.rows.length > 0 && userCheck.rows[0].role === 'admin') {
      return res.status(403).json({ message: 'Cannot delete admin users' });
    }

    await pool.query('DELETE FROM users WHERE id = $1', [id]);

    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT
        b.id,
        b.check_in_date,
        b.check_out_date,
        b.num_guests,
        b.total_price,
        b.status,
        b.created_at,
        u.name as user_name,
        u.email as user_email,
        p.name as pg_name,
        p.city as pg_city,
        p.state as pg_state
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN pgs p ON b.pg_id = p.id
      ORDER BY b.created_at DESC`
    );

    res.json({
      success: true,
      bookings: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const result = await pool.query(
      'UPDATE bookings SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({
      success: true,
      booking: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const getStats = async (req, res, next) => {
  try {
    const [usersCount, pgsCount, bookingsCount, revenue] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM users'),
      pool.query('SELECT COUNT(*) FROM pgs'),
      pool.query('SELECT COUNT(*) FROM bookings'),
      pool.query("SELECT SUM(total_price) FROM bookings WHERE status = 'confirmed'"),
    ]);

    res.json({
      success: true,
      stats: {
        totalUsers: parseInt(usersCount.rows[0].count),
        totalPGs: parseInt(pgsCount.rows[0].count),
        totalBookings: parseInt(bookingsCount.rows[0].count),
        totalRevenue: parseFloat(revenue.rows[0].sum || 0),
      },
    });
  } catch (error) {
    next(error);
  }
};
