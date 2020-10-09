const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

router.post('/', articlesController.addAll);
router.post('/:id', articlesController.addById);

router.get('/', articlesController.getAll);
router.get('/:id', articlesController.getById);

router.put('/', articlesController.updateAll);
router.put('/:id', articlesController.updateById);

router.delete('/', articlesController.deleteAll);
router.delete('/:id', articlesController.deleteById);

module.exports = router;
