// Script utilizado para sincronizar los modelos Sequelize con la base de datos.
// Este método crea automáticamente las tablas y relaciones a partir de los modelos.

import 'dotenv/config.js';
import { sequelize } from '../db/models/index.js';

(async () => {
  try {
    console.log('⏳ Sincronizando modelos con la base...');
    await sequelize.sync({ alter: true });
    console.log('✅ Tablas sincronizadas correctamente');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error en db-sync:', err.message);
    process.exit(1);
  }
})();
