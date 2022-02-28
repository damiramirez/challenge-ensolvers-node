const Task = require('../models/task');

const taskExistById = async (id) => {
  const taskExist = await Task.findById(id);

  if (!taskExist) {
    throw new Error('The task with this ID does not exist');
  }
};

module.exports = {
  taskExistById,
};
