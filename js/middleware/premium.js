module.exports = function(req, res, next) {
  if (!req.user.isPremium) return res.status(403).send('Access denied.');

  next();
};
