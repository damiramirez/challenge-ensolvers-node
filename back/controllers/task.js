const Task = require('../models/task');
const { httpError } = require('../helpers/error-htpp');
const Folder = require('../models/folder');

const getTasks = async (req, res) => {
  const { limit = 3, skip = 0 } = req.query;

  try {
    const [total, tasks] = await Promise.all([
      await Task.countDocuments(),
      await Task.find().populate('folder').limit(limit).skip(skip),
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
    const task = await Task.findById(id).populate('folder');

    res.json({
      task,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const createTask = async (req, res) => {
  const { description, folderId } = req.body;

  try {
    const folder = await Folder.findById(folderId);

    const task = new Task({ description, folder: folder._id });
    await task.save();

    folder.tasks = folder.tasks.concat(task._id);
    await folder.save();

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

    const idFolder = task.folder;
    const folder = await Folder.findById(idFolder);
    folder.tasks = folder.tasks.filter((task) => task.toJSON() !== id);
    await folder.save();

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
