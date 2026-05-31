const pool = require('../db');

// GET all
const getProductos = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nombre, tags, descripcion, material, resistencia, certificacion, foto_url, created_at, edited_at FROM productos WHERE deleted_at IS NULL ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// GET single
const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT id, nombre, tags, descripcion, material, resistencia, certificacion, foto_url, created_at, edited_at FROM productos WHERE id = $1 AND deleted_at IS NULL',
      [id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

// POST create
const createProducto = async (req, res) => {
  try {
    const { nombre, tags, descripcion, material, resistencia, certificacion } = req.body;
    let foto_url = null;

    if (req.file) foto_url = req.file.path;

    if (!nombre) return res.status(400).json({ error: 'El nombre es requerido' });

    // tags can come as a JSON string or comma-separated
    let parsedTags = [];
    if (tags) {
      try { parsedTags = JSON.parse(tags); } catch { parsedTags = tags.split(',').map(t => t.trim()).filter(Boolean); }
    }

    const result = await pool.query(
      `INSERT INTO productos (nombre, tags, descripcion, material, resistencia, certificacion, foto_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, nombre, tags, descripcion, material, resistencia, certificacion, foto_url, created_at`,
      [nombre, parsedTags, descripcion || null, material || null, resistencia || null, certificacion || null, foto_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

// PUT update
const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, tags, descripcion, material, resistencia, certificacion } = req.body;

    const exists = await pool.query('SELECT foto_url FROM productos WHERE id = $1 AND deleted_at IS NULL', [id]);
    if (exists.rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });

    let foto_url = exists.rows[0].foto_url;
    if (req.file) foto_url = req.file.path;

    if (!nombre) return res.status(400).json({ error: 'El nombre es requerido' });

    let parsedTags = [];
    if (tags) {
      try { parsedTags = JSON.parse(tags); } catch { parsedTags = tags.split(',').map(t => t.trim()).filter(Boolean); }
    }

    const result = await pool.query(
      `UPDATE productos
       SET nombre = $1, tags = $2, descripcion = $3, material = $4, resistencia = $5, certificacion = $6, foto_url = $7, edited_at = NOW()
       WHERE id = $8 AND deleted_at IS NULL
       RETURNING id, nombre, tags, descripcion, material, resistencia, certificacion, foto_url, edited_at`,
      [nombre, parsedTags, descripcion || null, material || null, resistencia || null, certificacion || null, foto_url, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

// DELETE soft-delete
const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'UPDATE productos SET deleted_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING id',
      [id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};

module.exports = { getProductos, getProducto, createProducto, updateProducto, deleteProducto };
