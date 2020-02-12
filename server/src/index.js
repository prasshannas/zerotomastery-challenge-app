require('dotenv').config();

const app = require('./app');
const db = require('../database/models');

db.sequelize
  .authenticate()
  // eslint-disable-next-line no-console
  .then(() => console.log('Connection has been established successfully.'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('Unable to connect to the database:', err));

app.server.listen(app.config.server.port);
