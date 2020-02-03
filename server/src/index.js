'use strict';

const app = require('./app');
const config = require('../config');

app.server.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
