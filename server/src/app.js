'use strict';

const express = require('express');

const apiRouter = express.Router();

const app = {};

app.server = express();
app.server.use(express.json());
app.server.use(express.urlencoded({ extended: true }));
app.server.use('/api', apiRouter);

require('./routes')(apiRouter);

module.exports = app;
