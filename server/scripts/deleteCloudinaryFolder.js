require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteFolder = async () => {
  try {
    console.log('🔍 Buscando recursos en la carpeta Agricultori...');

    // Delete all resources inside Agricultori (and subfolders) using search
    let publicIds = [];
    try {
      const result = await cloudinary.search
        .expression('folder:Agricultori/*')
        .max_results(500)
        .execute();
      publicIds = result.resources.map(r => r.public_id);
    } catch (e) {
      // fallback: search without nested
      try {
        const result = await cloudinary.search
          .expression('folder=Agricultori')
          .max_results(500)
          .execute();
        publicIds = result.resources.map(r => r.public_id);
      } catch (e2) { /* ignore */ }
    }

    if (publicIds.length > 0) {
      console.log(`🗑️  Eliminando ${publicIds.length} imagen(es)...`);
      await cloudinary.api.delete_resources(publicIds);
      console.log('✅ Imágenes eliminadas.');
    } else {
      console.log('📭 No se encontraron imágenes en la carpeta.');
    }

    // Delete subfolders
    try {
      await cloudinary.api.delete_folder('Agricultori/Distribuidoras');
      console.log('✅ Subcarpeta Distribuidoras eliminada.');
    } catch (e) { /* ignora si no existe */ }

    try {
      await cloudinary.api.delete_folder('Agricultori/Productos');
      console.log('✅ Subcarpeta Productos eliminada.');
    } catch (e) { /* ignora si no existe */ }

    // Delete root folder
    try {
      await cloudinary.api.delete_folder('Agricultori');
      console.log('✅ Carpeta Agricultori eliminada.');
    } catch (e) {
      console.log('⚠️  No se pudo eliminar la carpeta raíz (puede que ya esté vacía o no exista):', e.message);
    }

    console.log('\n🎉 Listo. La carpeta Agricultori ha sido eliminada de Cloudinary.');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

deleteFolder();
