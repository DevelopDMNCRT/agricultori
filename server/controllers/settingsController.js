const pool = require('../db');

// GET settings value by key
const getSetting = async (req, res) => {
  try {
    const { key } = req.params;
    const result = await pool.query('SELECT value FROM app_settings WHERE key = $1', [key]);
    
    if (result.rows.length === 0) {
      return res.json(null);
    }
    res.json(result.rows[0].value);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener la configuración' });
  }
};

// PUT update or create setting by key
const updateSetting = async (req, res) => {
  try {
    const { key } = req.params;
    const value = req.body; // Expecting JSON

    const result = await pool.query(
      `INSERT INTO app_settings (key, value) 
       VALUES ($1, $2) 
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value 
       RETURNING value`,
      [key, JSON.stringify(value)]
    );

    res.json(result.rows[0].value);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar la configuración' });
  }
};

module.exports = { getSetting, updateSetting };
