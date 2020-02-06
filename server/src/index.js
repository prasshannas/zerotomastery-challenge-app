require('dotenv').config();

const app = require('./app');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.log('Unable to connect to the database:', error));

app.server.listen(app.config.port);
