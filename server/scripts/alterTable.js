require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function alterTable() {
  try {
    await pool.query(`ALTER TABLE distribuidoras ADD COLUMN IF NOT EXISTS orden INT DEFAULT 0;`);
    console.log('✅ Columna orden añadida a distribuidoras');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS app_settings (
        key VARCHAR(100) PRIMARY KEY,
        value JSONB NOT NULL
      );
    `);
    console.log('✅ Tabla app_settings creada o ya existe');
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await pool.end();
  }
}

alterTable();
