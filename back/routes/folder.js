const { Router } = require('express');
const {
  getFolders,
  getFolder,
  createFolder,
  deleteFolder,
} = require('../controllers/folder');
const { validateInputs } = require('../middlewares/validate-inputs');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateId, validateCreate } = require('../validators/folder');

const router = Router();

router.get('/', validateJWT, getFolders);

router.get('/:id', validateId, getFolder);

router.post('/', validateCreate, createFolder);

router.delete('/:id', validateId, deleteFolder);

module.exports = router;
