const env = ['dev', 'prod'].includes(process.env.NODE_ENV)
  ? process.env.NODE_ENV
  : 'dev';

// eslint-disable-next-line import/no-dynamic-require
module.exports = require(`./${env}`);
