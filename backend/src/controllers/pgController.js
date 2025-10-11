import pool from '../config/database.js';

export const getAllPGs = async (req, res, next) => {
  try {
    const { search, city, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

    let query;
    const params = [];
    let paramCount = 1;

    // Use full-text search if search query is provided
    if (search && search.trim()) {
      query = `
        SELECT
          *,
          ts_rank(search_vector, websearch_to_tsquery('english', $${paramCount})) as rank
        FROM pgs
        WHERE search_vector @@ websearch_to_tsquery('english', $${paramCount})
      `;
      params.push(search.trim());
      paramCount++;
    } else {
      query = 'SELECT *, 0 as rank FROM pgs WHERE 1=1';
    }

    // Additional filters
    if (city) {
      query += ` AND LOWER(city) LIKE LOWER($${paramCount})`;
      params.push(`%${city}%`);
      paramCount++;
    }

    if (minPrice) {
      query += ` AND price >= $${paramCount}`;
      params.push(minPrice);
      paramCount++;
    }

    if (maxPrice) {
      query += ` AND price <= $${paramCount}`;
      params.push(maxPrice);
      paramCount++;
    }

    // Order by rank if search query exists, otherwise by created_at
    if (search && search.trim()) {
      query += ` ORDER BY rank DESC, created_at DESC LIMIT $${paramCount} OFFSET $${paramCount + 1}`;
    } else {
      query += ` ORDER BY created_at DESC LIMIT $${paramCount} OFFSET $${paramCount + 1}`;
    }

    params.push(limit, (page - 1) * limit);

    const result = await pool.query(query, params);

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getPGById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query('SELECT * FROM pgs WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'PG not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createPG = async (req, res, next) => {
  try {
    const {
      name,
      description,
      address,
      city,
      state,
      zip_code,
      latitude,
      longitude,
      price,
      amenities,
      images,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO pgs (owner_id, name, description, address, city, state, zip_code, latitude, longitude, price, amenities, images)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [
        req.user.id,
        name,
        description,
        address,
        city,
        state,
        zip_code,
        latitude,
        longitude,
        price,
        amenities,
        images,
      ]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const updatePG = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      address,
      city,
      state,
      zip_code,
      price,
      amenities,
      images,
    } = req.body;

    // Check ownership
    const pg = await pool.query('SELECT * FROM pgs WHERE id = $1', [id]);
    if (pg.rows.length === 0) {
      return res.status(404).json({ message: 'PG not found' });
    }

    if (pg.rows[0].owner_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const result = await pool.query(
      `UPDATE pgs SET name = $1, description = $2, address = $3, city = $4, state = $5,
       zip_code = $6, price = $7, amenities = $8, images = $9 WHERE id = $10 RETURNING *`,
      [name, description, address, city, state, zip_code, price, amenities, images, id]
    );

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const deletePG = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check ownership
    const pg = await pool.query('SELECT * FROM pgs WHERE id = $1', [id]);
    if (pg.rows.length === 0) {
      return res.status(404).json({ message: 'PG not found' });
    }

    if (pg.rows[0].owner_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await pool.query('DELETE FROM pgs WHERE id = $1', [id]);

    res.json({
      success: true,
      message: 'PG deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
