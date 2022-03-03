const { encrypt } = require('../helpers/handleBcrypt');

const User = require('../models/user');
const { httpError } = require('../helpers/error-htpp');
const { compare } = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const passwordHash = await encrypt(password);
    const user = await new User({ username, password: passwordHash });

    await user.save();

    res.json({
      user,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        message: 'User/Password Incorrect - **User**',
      });
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({
        message: 'User/Password Incorrect - **Password**',
      });
    }

    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  register,
  login,
};
