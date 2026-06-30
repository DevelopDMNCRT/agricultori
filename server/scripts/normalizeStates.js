const pool = require('../db');

function normalizeState(state) {
  if (!state) return 'Desconocido';
  const lower = state.toLowerCase().trim();
  if (lower.includes('jalisco')) return 'Jalisco';
  if (lower.includes('michoacan') || lower.includes('michoacán') || lower.includes('mchoacán') || lower.includes('mchoacan')) return 'Michoacán';
  if (lower.includes('zacatecas')) return 'Zacatecas';
  if (lower.includes('aguascalientes')) return 'Aguascalientes';
  if (lower.includes('colima')) return 'Colima';
  if (lower.includes('nayarit')) return 'Nayarit';
  if (lower.includes('baja california sur')) return 'Baja California Sur';
  
  return lower.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

async function run() {
  try {
    const res = await pool.query('SELECT id, estado FROM distribuidoras');
    for (const row of res.rows) {
      const normalized = normalizeState(row.estado);
      if (normalized !== row.estado) {
        await pool.query('UPDATE distribuidoras SET estado = $1 WHERE id = $2', [normalized, row.id]);
        console.log(`Updated "${row.estado}" to "${normalized}"`);
      }
    }
    console.log('✅ Base de datos normalizada correctamente.');
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

run();
