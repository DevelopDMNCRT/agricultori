const pool = require('../db');

// GET all users (non-deleted)
const getUsuarios = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nombre, usuario, correo, telefono, created_at, edited_at FROM usuarios WHERE deleted_at IS NULL ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// GET single user
const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT id, nombre, usuario, correo, telefono, created_at, edited_at FROM usuarios WHERE id = $1 AND deleted_at IS NULL',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

// POST create user
const createUsuario = async (req, res) => {
  try {
    const bcrypt = require('bcryptjs');
    const { nombre, usuario, correo, telefono, contrasena } = req.body;

    if (!nombre || !usuario || !correo || !telefono || !contrasena) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      return res.status(400).json({ error: 'Formato de correo inválido' });
    }

    if (!/^[0-9]{10}$/.test(telefono)) {
      return res.status(400).json({ error: 'El teléfono debe tener exactamente 10 dígitos' });
    }

    // Check if usuario or correo already exists
    const exists = await pool.query(
      'SELECT id FROM usuarios WHERE (usuario = $1 OR correo = $2) AND deleted_at IS NULL',
      [usuario, correo]
    );
    if (exists.rows.length > 0) {
      return res.status(409).json({ error: 'El usuario o correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const result = await pool.query(
      `INSERT INTO usuarios (nombre, usuario, correo, telefono, contrasena)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, nombre, usuario, correo, telefono, created_at`,
      [nombre, usuario, correo, telefono, hashedPassword]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// PUT update user
const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, usuario, correo, telefono } = req.body;

    if (!nombre || !usuario || !correo || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      return res.status(400).json({ error: 'Formato de correo inválido' });
    }

    if (!/^[0-9]{10}$/.test(telefono)) {
      return res.status(400).json({ error: 'El teléfono debe tener exactamente 10 dígitos' });
    }

    // Check if usuario or correo already belongs to another user
    const exists = await pool.query(
      'SELECT id FROM usuarios WHERE (usuario = $1 OR correo = $2) AND id != $3 AND deleted_at IS NULL',
      [usuario, correo, id]
    );
    if (exists.rows.length > 0) {
      return res.status(409).json({ error: 'El usuario o correo ya está registrado' });
    }

    const result = await pool.query(
      `UPDATE usuarios
       SET nombre = $1, usuario = $2, correo = $3, telefono = $4, edited_at = NOW()
       WHERE id = $5 AND deleted_at IS NULL
       RETURNING id, nombre, usuario, correo, telefono, edited_at`,
      [nombre, usuario, correo, telefono, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

// DELETE soft-delete user
const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'UPDATE usuarios SET deleted_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

// POST login user
const loginUsuario = async (req, res) => {
  try {
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
      return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
    }

    const result = await pool.query(
      'SELECT id, nombre, correo, contrasena FROM usuarios WHERE correo = $1 AND deleted_at IS NULL',
      [correo]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(contrasena, user.contrasena);

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      { id: user.id, nombre: user.nombre, correo: user.correo },
      process.env.JWT_SECRET || 'agricultori_secret_key',
      { expiresIn: '1d' }
    );

    res.json({ token, user: { id: user.id, nombre: user.nombre, correo: user.correo } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

module.exports = { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario, loginUsuario };
