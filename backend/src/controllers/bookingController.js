import pool from '../config/database.js';

export const getUserBookings = async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT b.*, p.name as pg_name, p.city as pg_city, p.state as pg_state, p.address as pg_address
       FROM bookings b
       JOIN pgs p ON b.pg_id = p.id
       WHERE b.user_id = $1
       ORDER BY b.created_at DESC`,
      [req.user.id]
    );

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getBookingById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT b.*, p.name as pg_name, p.city as pg_city, p.state as pg_state
       FROM bookings b
       JOIN pgs p ON b.pg_id = p.id
       WHERE b.id = $1 AND b.user_id = $2`,
      [id, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createBooking = async (req, res, next) => {
  try {
    const { pg_id, check_in_date, check_out_date, num_guests } = req.body;

    // Get PG details
    const pgResult = await pool.query('SELECT price FROM pgs WHERE id = $1', [pg_id]);

    if (pgResult.rows.length === 0) {
      return res.status(404).json({ message: 'PG not found' });
    }

    const pg = pgResult.rows[0];

    // Calculate total price (simplified - based on monthly price)
    const checkIn = new Date(check_in_date);
    const checkOut = new Date(check_out_date);
    const days = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const months = Math.ceil(days / 30);
    const total_price = pg.price * months;

    const result = await pool.query(
      `INSERT INTO bookings (user_id, pg_id, check_in_date, check_out_date, num_guests, total_price, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [req.user.id, pg_id, check_in_date, check_out_date, num_guests, total_price, 'pending']
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Check if booking exists and belongs to user
    const booking = await pool.query(
      'SELECT * FROM bookings WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (booking.rows.length === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const result = await pool.query(
      'UPDATE bookings SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const cancelBooking = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if booking exists and belongs to user
    const booking = await pool.query(
      'SELECT * FROM bookings WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (booking.rows.length === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await pool.query(
      'UPDATE bookings SET status = $1 WHERE id = $2',
      ['cancelled', id]
    );

    res.json({
      success: true,
      message: 'Booking cancelled successfully',
    });
  } catch (error) {
    next(error);
  }
};
