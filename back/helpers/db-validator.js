const Task = require('../models/task');
const Folder = require('../models/folder');
const User = require('../models/user');

const taskExistById = async (id) => {
  const taskExist = await Task.findById(id);

  if (!taskExist) {
    throw new Error('The task with this ID does not exist');
  }
};

const folderExistById = async (id) => {
  const taskExist = await Folder.findById(id);

  if (!taskExist) {
    throw new Error('The Folder  with this ID does not exist');
  }
};

const userExist = async (username) => {
  const user = await User.findOne({ username });

  if (user) {
    throw new Error('Username is already registered.');
  }
};

module.exports = {
  taskExistById,
  folderExistById,
  userExist,
};
