require('dotenv').config();

const app = require('./app');
const db = require('../database/models');

db.sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.log('Unable to connect to the database:', err));

app.server.listen(app.config.port);
