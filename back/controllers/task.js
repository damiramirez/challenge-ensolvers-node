const Task = require('../models/task');
const { httpError } = require('../helpers/error-htpp');

const getTasks = async (req, res) => {
  const { limit = 3, skip = 0 } = req.query;

  try {
    const [total, tasks] = await Promise.all([
      await Task.countDocuments(),
      await Task.find().limit(limit).skip(skip),
    ]);

    if (total === 0) {
      return res.json({
        message: 'No task',
      });
    }

    res.json({
      total,
      tasks,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    res.json({
      task,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const createTask = async (req, res) => {
  const { description } = req.body;

  try {
    const task = new Task({ description });
    await task.save();

    res.status(201).json({
      task,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { description },
      { new: true }
    );

    res.json({
      task,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const updateComplete = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    task.completed = !task.completed;
    await task.save();

    res.json({
      task,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndRemove(id);
    res.json({
      deleted: true,
      task,
    });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  updateComplete,
  deleteTask,
};
