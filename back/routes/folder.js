const { Router } = require('express');
const {
  getFolders,
  getFolder,
  createFolder,
  deleteFolder,
} = require('../controllers/folder');
const { validateId, validateCreate } = require('../validators/folder');

const router = Router();

router.get('/', getFolders);

router.get('/:id', validateId, getFolder);

router.post('/', validateCreate, createFolder);

router.delete('/:id', validateId, deleteFolder);

module.exports = router;
