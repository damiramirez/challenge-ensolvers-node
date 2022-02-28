const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);

    console.log('DB UP!');
  } catch (err) {
    console.log(err);
    throw new Error('Failed to raise database');
  }
};

module.exports = { dbConnection };
