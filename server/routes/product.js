const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.add);

router.get('/', productController.getAll);
router.get('/:id', productController.getById);

router.put('/:id', productController.updateById);

router.delete('/', productController.deleteAll);
router.delete('/:id', productController.deleteById);

module.exports = router;
