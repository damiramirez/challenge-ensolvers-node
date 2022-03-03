const { check } = require('express-validator');
const { userExist } = require('../helpers/db-validator');
const { validateInputs } = require('../middlewares/validate-inputs');

const validateRegister = [
  check('username', 'Username is required').not().isEmpty(),
  check('username').custom(userExist),
  check('password', 'Password is required and more than 6 characters.')
    .not()
    .isEmpty()
    .isLength({ min: 6 }),
  (req, res, next) => validateInputs(req, res, next),
];

const validateLogin = [
  check('username', 'Username required').not().isEmpty(),
  check('password', 'Password required').not().isEmpty(),
  (req, res, next) => validateInputs(req, res, next),
];

module.exports = { validateRegister, validateLogin };
