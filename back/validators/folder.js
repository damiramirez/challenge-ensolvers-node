const { check } = require('express-validator');
const { folderExistById } = require('../helpers/db-validator');
const { validateInputs } = require('../middlewares/validate-inputs');

const validateId = [
  check('id').custom(folderExistById),
  check('id', 'ID is not a MongoId').isMongoId(),
  (req, res, next) => validateInputs(req, res, next),
];

const validateCreate = [
  check('name', 'Name is required').exists(),
  check('name', 'Name can not be empty').not().isEmpty(),
  check('Name', 'Name must be a string').trim().isString(),
  (req, res, next) => validateInputs(req, res, next),
];

module.exports = {
  validateId,
  validateCreate,
};
