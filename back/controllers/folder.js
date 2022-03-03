const { httpError } = require('../helpers/error-htpp');
const Folder = require('../models/folder');
const Task = require('../models/task');

const getFolders = async (req, res) => {
  const { limit = 5, skip = 0 } = req.query;

  try {
    const folders = await Folder.find()
      .populate('username', 'username')
      .populate('tasks')
      .limit(limit)
      .skip(skip);

    res.json({
      folders,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const getFolder = async (req, res) => {
  const { id } = req.params;

  try {
    const folder = await Folder.findById(id)
      .populate('username', 'username')
      .populate('tasks');

    res.json({
      folder,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const createFolder = async (req, res) => {
  const { name } = req.body;

  try {
    const data = {
      name,
      username: req.user.id,
    };

    const folder = new Folder(data);
    await folder.save();

    res.status(201).json({
      folder,
    });
  } catch (err) {
    httpError(res, err);
  }
};

const deleteFolder = async (req, res) => {
  const { id } = req.params;

  try {
    const folder = await Folder.findByIdAndRemove(id);

    const tasksToDelete = folder.tasks;

    await Task.deleteMany({ _id: { $in: tasksToDelete } });

    res.json({
      deleted: true,
      folder,
    });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getFolders,
  getFolder,
  createFolder,
  deleteFolder,
};
