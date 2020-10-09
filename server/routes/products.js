const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.post('/', urlencodedParser, productsController.add);

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

router.put('/', productsController.updateAll);
router.put('/:id', productsController.updateById);

router.delete('/', productsController.deleteAll);
router.delete('/:id', productsController.deleteById);

module.exports = router;
