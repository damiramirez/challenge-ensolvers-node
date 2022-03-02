const { Router } = require('express');
const {
  getFolders,
  getFolder,
  createFolder,
  deleteFolder,
} = require('../controllers/folder');

const router = Router();

router.get('/', getFolders);

router.get('/:id', getFolder);

router.post('/', createFolder);

router.delete('/:id', deleteFolder);

module.exports = router;
