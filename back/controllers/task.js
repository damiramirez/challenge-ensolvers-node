const Task = require('../models/task');

const getTasks = async (req, res) => {
  const [total, tasks] = await Promise.all([
    await Task.countDocuments(),
    await Task.find(),
  ]);

  if (!tasks) {
    return res.status(400).json({
      message: 'Tasks not found',
    });
  }

  if (tasks.length === 0) {
    res.json({
      message: 'No task',
    });
  }

  res.json({
    total,
    tasks,
  });
};

const getTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  res.json({
    task,
  });
};

const createTask = async (req, res) => {
  const { description } = req.body;

  const task = new Task({ description });
  await task.save();

  res.status(201).json({
    task,
  });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;

  const task = await Task.findByIdAndUpdate(
    id,
    { description, completed },
    { new: true }
  );

  res.json({
    task,
    completed,
  });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndRemove(id);

  res.json({
    deleted: true,
    task,
  });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
