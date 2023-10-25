const jwt = require('jsonwebtoken');

const userFromToken = (req) => {
  console.log(req.header('Authorization'))
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = userFromToken;
