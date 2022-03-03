const { Router } = require('express');
const { login, register } = require('../controllers/auth');
const { validateRegister, validateLogin } = require('../validators/user');

const router = Router();

router.post('/register', validateRegister, register);

router.post('/login', validateLogin, login);

module.exports = router;
