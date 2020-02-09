const router = require('express').Router();

module.exports = apiRouter => {
  router.get('/', (req, res) => {
    res.json({ greeting: 'welcome' });
  });

  apiRouter.use('/welcome', router);
};
