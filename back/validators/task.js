const { check } = require('express-validator');
const { taskExistById, folderExistById } = require('../helpers/db-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const { validateJWT } = require('../middlewares/validate-jwt');

const validateId = [
  validateJWT,
  check('id').custom(taskExistById),
  check('id', 'ID is not a MongoId').isMongoId(),
  (req, res, next) => validateInputs(req, res, next),
];

const validateCreate = [
  validateJWT,
  check('description', 'Description is required').exists(),
  check('description', 'Description can not be empty').not().isEmpty(),
  check('description', 'Description must be a string').trim().isString(),
  check('folderId').custom(folderExistById),
  check('folderId', 'ID is not a MongoId').isMongoId(),
  (req, res, next) => validateInputs(req, res, next),
];

const validateUpdate = [
  validateJWT,
  check('id').custom(taskExistById),
  check('id', 'ID is not a MongoId').isMongoId(),
  check('description', 'Description is required').exists(),
  check('description', 'Description can not be empty').not().isEmpty(),
  (req, res, next) => validateInputs(req, res, next),
];

module.exports = { validateId, validateCreate, validateUpdate };
