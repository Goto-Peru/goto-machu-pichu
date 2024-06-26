const { Turistic, User } = require('../db');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  PostTuristic: async (req, res) => {
    const { 
      name,
      details,
      price,
      package
    } = req.body;

    try {

      // Verificar si se han proporcionado archivos
      if (!req.files || req.files.length === 0) {
        console.log('No se han proporcionado archivos.')
        return res.status(400).send('No se han proporcionado archivos.');
      }

      // Subir imágenes a Cloudinary
      const imageUrls = await Promise.all(req.files.map(async (file) => {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        console.log('Imagen subida a Cloudinary:', cloudinaryUploadResult.secure_url);
        return cloudinaryUploadResult.secure_url;
      }));

      // Crear el restaurante
      const newTuristic = await Turistic.create({
        imageFile: imageUrls,
        name,
        details,
        price,
        package
      });

      console.log('Turismo creado correctamente');
      res.status(200).send({ success: true, data: newTuristic });
    } catch (error) {
      console.error('Error al crear el turismo:', error);
      res.status(500).send({ success: false, error: 'Ocurrió un error al crear el turismo' });
    }
  }
};
