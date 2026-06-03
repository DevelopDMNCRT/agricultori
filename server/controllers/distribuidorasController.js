const pool = require('../db');
const path = require('path');
const fs = require('fs');

// GET all distribuidoras
const getDistribuidoras = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nombre, estado, ciudad, domicilio, referencias, telefono, created_at, edited_at FROM distribuidoras WHERE deleted_at IS NULL ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener distribuidoras' });
  }
};

// GET single distribuidora
const getDistribuidora = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT id, nombre, estado, ciudad, domicilio, referencias, telefono, created_at, edited_at FROM distribuidoras WHERE id = $1 AND deleted_at IS NULL',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Distribuidora no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener distribuidora' });
  }
};

// POST create distribuidora
const createDistribuidora = async (req, res) => {
  try {
    const { nombre, estado, ciudad, domicilio, referencias, telefono } = req.body;

    if (!nombre || !estado || !ciudad || !domicilio || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    if (!/^[0-9]{10}$/.test(telefono)) {
      return res.status(400).json({ error: 'El teléfono debe tener exactamente 10 dígitos' });
    }

    const result = await pool.query(
      `INSERT INTO distribuidoras (nombre, estado, ciudad, domicilio, referencias, telefono)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, nombre, estado, ciudad, domicilio, referencias, telefono, created_at`,
      [nombre, estado, ciudad, domicilio, referencias || null, telefono]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear distribuidora' });
  }
};

// PUT update distribuidora
const updateDistribuidora = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, estado, ciudad, domicilio, referencias, telefono } = req.body;
    
    // Check if it exists
    const exists = await pool.query('SELECT id FROM distribuidoras WHERE id = $1 AND deleted_at IS NULL', [id]);
    if (exists.rows.length === 0) {
      return res.status(404).json({ error: 'Distribuidora no encontrada' });
    }

    if (!nombre || !estado || !ciudad || !domicilio || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    if (!/^[0-9]{10}$/.test(telefono)) {
      return res.status(400).json({ error: 'El teléfono debe tener exactamente 10 dígitos' });
    }

    const result = await pool.query(
      `UPDATE distribuidoras
       SET nombre = $1, estado = $2, ciudad = $3, domicilio = $4, referencias = $5, telefono = $6, edited_at = NOW()
       WHERE id = $7 AND deleted_at IS NULL
       RETURNING id, nombre, estado, ciudad, domicilio, referencias, telefono, edited_at`,
      [nombre, estado, ciudad, domicilio, referencias || null, telefono, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar distribuidora' });
  }
};

// DELETE soft-delete distribuidora
const deleteDistribuidora = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'UPDATE distribuidoras SET deleted_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Distribuidora no encontrada' });
    }

    res.json({ message: 'Distribuidora eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar distribuidora' });
  }
};

module.exports = { getDistribuidoras, getDistribuidora, createDistribuidora, updateDistribuidora, deleteDistribuidora };
