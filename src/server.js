import 'dotenv/config.js';
import app from './app.js';
import { sequelize } from './db/models/index.js';

const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    app.listen(port, () => console.log(`API listening on ${port}`));
  } catch (err) {
    console.error('DB connection error', err);
    process.exit(1);
  }
})();
