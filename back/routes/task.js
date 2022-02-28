const { Router } = require('express');
const { check } = require('express-validator');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require('../controllers/task');
const { validateInputs } = require('../middlewares/validate-inputs');

const router = Router();

// Route /api/task

router.get('/', getTasks);

router.get(
  '/:id',

  getTask
);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
