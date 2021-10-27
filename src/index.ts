import 'express-async-errors';
import 'module-alias/register';

import './enviroment';
import app from './app';
import sequelize from './db';

const port = process.env.PORT;

(async () => {
  try {
    await app.listen(port);
    await sequelize.authenticate();
    console.log(`server running at the port ${port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
