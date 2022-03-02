const { Router } = require('express');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  updateComplete,
} = require('../controllers/task');

const {
  validateCreate,
  validateUpdate,
  validateId,
} = require('../validators/task');

const router = Router();

// Route /api/task

router.get('/', getTasks);

router.get('/:id', validateId, getTask);

router.post('/', validateCreate, createTask);

router.put('/:id', validateUpdate, updateTask);

router.put('/complete/:id', validateId, updateComplete);

router.delete('/:id', validateId, deleteTask);

module.exports = router;
