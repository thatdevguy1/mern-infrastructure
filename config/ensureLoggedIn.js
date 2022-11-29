module.exports = function (req, res, next) {
  if (!res.user) return res.status(401).json("Unauthorized");
  next();
};
