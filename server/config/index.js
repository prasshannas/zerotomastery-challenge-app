'use strict';

const env = ['dev', 'prod'].includes(process.env.NODE_ENV)
 ? process.env.NODE_ENV
 : 'dev';

module.exports = require(`./${env}`);
