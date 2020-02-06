module.exports = (err, req, res, next) => {
  if (!err) {
    return next();
  }
  return res.sendStatus(500);
};
