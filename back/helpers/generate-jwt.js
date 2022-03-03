const jwt = require('jsonwebtoken');
require('dotenv');

const generateJWT = (id = '') => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Can not generate JWT');
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { generateJWT };
