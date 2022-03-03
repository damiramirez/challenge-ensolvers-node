const bcrypt = require('bcryptjs');

const encrypt = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const compare = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  encrypt,
  compare,
};
