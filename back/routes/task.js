const { Router } = require('express');
const { check } = require('express-validator');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require('../controllers/task');
const { taskExistById } = require('../helpers/db-validator');
const { validateInputs } = require('../middlewares/validate-inputs');

const router = Router();

// Route /api/task

router.get('/', getTasks);

router.get(
  '/:id',
  [
    check('id').custom(taskExistById),
    check('id', 'ID is not a MongoId').isMongoId(),
    validateInputs,
  ],
  getTask
);

router.post(
  '/',
  [
    check('description', 'Description is required').trim().not().isEmpty(),
    validateInputs,
  ],
  createTask
);

router.put(
  '/:id',
  [
    check('id').custom(taskExistById),
    check('id', 'ID is not a MongoId').isMongoId(),
    check('description', 'Description must be a string')
      .trim()
      .optional()
      .isString(),
    check('completed', 'Completed must be a boolean')
      .trim()
      .optional()
      .isBoolean(),
    validateInputs,
  ],
  updateTask
);

router.delete(
  '/:id',
  [
    check('id').custom(taskExistById),
    check('id', 'ID is not a MongoId').isMongoId(),
    validateInputs,
  ],
  deleteTask
);

module.exports = router;
