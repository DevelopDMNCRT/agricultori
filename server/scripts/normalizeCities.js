const pool = require('../db');

function normalizeCity(city) {
  if (!city) return 'Desconocido';
  let lower = city.toLowerCase().trim();

  // Explicit overrides
  if (['cd guzman', 'ciudad guzman', 'ciudad guzmán', 'cd guzmán', 'cd. guzman'].includes(lower)) return 'Cd. Guzmán';
  if (lower === 'tancitaro') return 'Tancítaro';
  if (lower === 'periban') return 'Peribán';
  if (lower === 'tacambaro') return 'Tacámbaro';
  if (lower === 'tinguindin') return 'Tingüindín';
  if (lower === 'zitacuaro') return 'Zitácuaro';
  if (lower === 'tabascp') return 'Tabasco'; 

  // Title case
  const minorWords = ['de', 'del', 'el', 'la', 'los', 'las', 'y', 'en'];
  return lower.split(/\s+/).map((word, index) => {
    if (index > 0 && minorWords.includes(word)) return word;
    return word.charAt(0).toUpperCase() + word.substr(1);
  }).join(' ');
}

async function run() {
  try {
    const res = await pool.query('SELECT id, ciudad FROM distribuidoras');
    let updated = 0;
    for (const row of res.rows) {
      const normalized = normalizeCity(row.ciudad);
      if (normalized !== row.ciudad) {
        await pool.query('UPDATE distribuidoras SET ciudad = $1 WHERE id = $2', [normalized, row.id]);
        console.log(`Updated ciudad "${row.ciudad}" to "${normalized}"`);
        updated++;
      }
    }
    console.log(`✅ Base de datos normalizada correctamente. Se actualizaron ${updated} ciudades.`);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

run();
