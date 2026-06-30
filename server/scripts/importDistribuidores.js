const fs = require('fs');
const path = require('path');
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

async function importCSV() {
  try {
    const csvPath = path.join(__dirname, '../../distribuidores.csv');
    const data = fs.readFileSync(csvPath, 'utf8');
    const lines = data.split('\n');
    
    let imported = 0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const firstComma = line.indexOf(',');
      if (firstComma === -1) continue;

      const nombre = line.substring(0, firstComma).trim();
      let direccion = line.substring(firstComma + 1).trim();

      if (!direccion || direccion === '') continue;

      // Skip lines that are just headers or section markers
      if (nombre.toLowerCase() === 'sucursales' || nombre.toLowerCase() === 'jalisco') continue;
      
      // Remove quotes if present
      if (direccion.startsWith('"') && direccion.endsWith('"')) {
        direccion = direccion.substring(1, direccion.length - 1);
      }

      // Parse direccion to extract City, State, Domicilio
      const dirParts = direccion.split(',').map(p => p.trim()).filter(p => p !== '');
      
      let estado = 'Desconocido';
      let ciudad = 'Desconocido';
      let domicilio = 'Conocido';
      
      if (dirParts.length >= 2) {
        estado = normalizeState(dirParts[dirParts.length - 1]);
        ciudad = normalizeCity(dirParts[dirParts.length - 2]);
        if (dirParts.length > 2) {
          domicilio = dirParts.slice(0, dirParts.length - 2).join(', ');
        }
      } else if (dirParts.length === 1) {
        ciudad = normalizeCity(dirParts[0]);
      }

      const telefono = '0000000000'; // Default value since it's NOT NULL
      const referencias = '';

      const query = `
        INSERT INTO distribuidoras (nombre, estado, ciudad, domicilio, referencias, telefono)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
      const values = [nombre, estado, ciudad, domicilio, referencias, telefono];

      await pool.query(query, values);
      imported++;
    }

    console.log(`✅ Importación completada. Se importaron ${imported} distribuidoras.`);
  } catch (error) {
    console.error('Error durante la importación:', error);
  } finally {
    pool.end();
  }
}

importCSV();
