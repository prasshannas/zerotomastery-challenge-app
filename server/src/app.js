const express = require('express');

const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const apiRouter = express.Router();

const app = {};

app.server = express();
app.server.use(express.json());
app.server.use(express.urlencoded({ extended: true }));
app.server.use('/api', apiRouter);

require('./routes')(apiRouter);

app.server.use(notFound);
app.server.use(errorHandler);

module.exports = app;
