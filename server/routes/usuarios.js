const express = require('express');
const router = express.Router();
const {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario,
} = require('../controllers/usuariosController');

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', createUsuario);
router.post('/login', loginUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;
