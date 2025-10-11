import pool from '../config/database.js';

export const getPGReviews = async (req, res, next) => {
  try {
    const { pgId } = req.params;

    const result = await pool.query(
      `SELECT r.*, u.name as user_name
       FROM reviews r
       JOIN users u ON r.user_id = u.id
       WHERE r.pg_id = $1
       ORDER BY r.created_at DESC`,
      [pgId]
    );

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const { pg_id, rating, comment } = req.body;

    // Check if user has already reviewed this PG
    const existingReview = await pool.query(
      'SELECT * FROM reviews WHERE user_id = $1 AND pg_id = $2',
      [req.user.id, pg_id]
    );

    if (existingReview.rows.length > 0) {
      return res.status(400).json({ message: 'You have already reviewed this PG' });
    }

    const result = await pool.query(
      'INSERT INTO reviews (user_id, pg_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.user.id, pg_id, rating, comment]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    // Check if review exists and belongs to user
    const review = await pool.query(
      'SELECT * FROM reviews WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (review.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }

    const result = await pool.query(
      'UPDATE reviews SET rating = $1, comment = $2 WHERE id = $3 RETURNING *',
      [rating, comment, id]
    );

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if review exists and belongs to user
    const review = await pool.query(
      'SELECT * FROM reviews WHERE id = $1 AND user_id = $2',
      [id, req.user.id]
    );

    if (review.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }

    await pool.query('DELETE FROM reviews WHERE id = $1', [id]);

    res.json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
