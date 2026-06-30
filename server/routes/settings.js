const express = require('express');
const router = express.Router();
const { getSetting, updateSetting } = require('../controllers/settingsController');

router.get('/:key', getSetting);
router.put('/:key', updateSetting);

module.exports = router;
