// Script utilizado durante el desarrollo para verificar la conexión a PostgreSQL.
// No forma parte de la ejecución normal del TP.

import { Client } from 'pg';
import 'dotenv/config.js';

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

(async () => {
  try {
    await client.connect();
    console.log('✅ Conexión a la base OK');
  } catch (err) {
    console.error('❌ Error conectando a la base:', err.message);
  } finally {
    await client.end();
  }
})();
