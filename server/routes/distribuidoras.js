const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  getDistribuidoras,
  getDistribuidora,
  createDistribuidora,
  updateDistribuidora,
  deleteDistribuidora,
} = require('../controllers/distribuidorasController');

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer storage config for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Agricultori/Distribuidoras',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif']
  },
});
const upload = multer({ storage: storage });

router.get('/', getDistribuidoras);
router.get('/:id', getDistribuidora);
router.post('/', upload.single('foto'), createDistribuidora);
router.put('/:id', upload.single('foto'), updateDistribuidora);
router.delete('/:id', deleteDistribuidora);

module.exports = router;
