const express = require('express');
const router = express.Router();
const {
  getDistribuidoras,
  getDistribuidora,
  createDistribuidora,
  updateDistribuidora,
  deleteDistribuidora,
  reorderDistribuidoras,
} = require('../controllers/distribuidorasController');

router.get('/', getDistribuidoras);
router.put('/reorder', reorderDistribuidoras);
router.get('/:id', getDistribuidora);
router.post('/', createDistribuidora);
router.put('/:id', updateDistribuidora);
router.delete('/:id', deleteDistribuidora);

module.exports = router;
