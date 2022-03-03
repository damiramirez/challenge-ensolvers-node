const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'No token in header.',
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETKEY);

    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json({
        message: 'User not found.',
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: 'Token invalid.',
    });
  }
};

module.exports = { validateJWT };
