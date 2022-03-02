const { Router } = require('express');
const { check } = require('express-validator');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  updateComplete,
} = require('../controllers/task');
const { taskExistById } = require('../helpers/db-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const {
  validateCreate,
  validateUpdate,
  validateId,
} = require('../validators/users');

const router = Router();

// Route /api/task

router.get('/', getTasks);

router.get('/:id', validateId, getTask);

router.post('/', validateCreate, createTask);

router.put('/:id', validateUpdate, updateTask);

router.put('/complete/:id', validateId, updateComplete);

router.delete('/:id', validateId, deleteTask);

module.exports = router;
