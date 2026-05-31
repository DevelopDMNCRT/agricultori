const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Agricultori/Productos',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  },
});
const upload = multer({ storage });

const {
  getProductos, getProducto, createProducto, updateProducto, deleteProducto,
} = require('../controllers/productosController');

router.get('/', getProductos);
router.get('/:id', getProducto);
router.post('/', upload.single('foto'), createProducto);
router.put('/:id', upload.single('foto'), updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
