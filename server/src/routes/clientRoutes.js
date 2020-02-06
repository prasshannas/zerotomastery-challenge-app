const path = require('path');
const express = require('express');

const router = express.Router();

module.exports = (clientRouter) => {
  if (['prod'].includes(process.env.NODE_ENV)) {
    router.use(express.static(path.resolve('..', 'client', 'build')));
    router.get('*', (req, res) => {
      res.sendFile(path.resolve('..', 'client', 'build', 'index.html'));
    });
  }

  clientRouter.use('/', router);
};
