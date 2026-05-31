require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const initFolders = async () => {
  try {
    console.log('☁️  Conectando con Cloudinary...');
    console.log(`   Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME}`);

    // Verificar conexión
    const ping = await cloudinary.api.ping();
    console.log('✅ Conexión exitosa:', ping.status);

    // Crear estructura de carpetas
    console.log('\n📁 Creando estructura de carpetas...');

    await cloudinary.api.create_folder('Agricultori');
    console.log('✅ Carpeta creada: Agricultori');

    await cloudinary.api.create_folder('Agricultori/Distribuidoras');
    console.log('✅ Carpeta creada: Agricultori/Distribuidoras');

    await cloudinary.api.create_folder('Agricultori/Productos');
    console.log('✅ Carpeta creada: Agricultori/Productos');

    console.log('\n🎉 Estructura lista en Cloudinary:');
    console.log('   📂 Agricultori');
    console.log('      📂 Distribuidoras');
    console.log('      📂 Productos');

  } catch (err) {
    if (err.error && err.error.message) {
      console.error('❌ Error de Cloudinary:', err.error.message);
    } else {
      console.error('❌ Error:', err.message || err);
    }
  }
};

initFolders();
