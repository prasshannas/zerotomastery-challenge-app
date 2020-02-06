const express = require('express');

const config = require('../config');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const apiRouter = express.Router();
const clientRouter = express.Router();

const app = {};

app.config = config;

app.server = express();
app.server.use(express.json());
app.server.use(express.urlencoded({ extended: true }));
app.server.use('/api', apiRouter);
app.server.use('/', clientRouter);

require('./routes/apiRoutes')(apiRouter);
require('./routes/clientRoutes')(clientRouter);

app.server.use(notFound);
app.server.use(errorHandler);

module.exports = app;
