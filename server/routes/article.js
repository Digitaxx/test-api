const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/', articleController.create);

router.get('/', articleController.getAll);
router.get('/:id', articleController.getById);

router.put('/:id', articleController.updateById);

router.delete('/:id', articleController.deleteById);


module.exports = router;
