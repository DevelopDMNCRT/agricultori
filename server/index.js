require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const usuariosRoutes = require('./routes/usuarios');
const distribuidorasRoutes = require('./routes/distribuidoras');
const productosRoutes = require('./routes/productos');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/distribuidoras', distribuidorasRoutes);
app.use('/api/productos', productosRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Init DB table and start server
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        usuario VARCHAR(50) NOT NULL UNIQUE,
        correo VARCHAR(150) NOT NULL UNIQUE,
        telefono CHAR(10) NOT NULL,
        contrasena VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        edited_at TIMESTAMP,
        deleted_at TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS distribuidoras (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(150) NOT NULL,
        estado VARCHAR(100) NOT NULL,
        ciudad VARCHAR(100) NOT NULL,
        domicilio TEXT NOT NULL,
        telefono CHAR(10) NOT NULL,
        foto_url TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        edited_at TIMESTAMP,
        deleted_at TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS productos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(200) NOT NULL,
        tags TEXT[] DEFAULT '{}',
        descripcion TEXT,
        material VARCHAR(200),
        resistencia VARCHAR(200),
        certificacion VARCHAR(200),
        foto_url TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        edited_at TIMESTAMP,
        deleted_at TIMESTAMP
      );
    `);
    console.log('✅ Tablas listas en la base de datos');
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Error al inicializar la base de datos:', err.message);
    process.exit(1);
  }
};

initDB();
