const Router = require('express');
const router = new Router();
const productController = require('../controller/productController');

router.post('/product', productController.create);
router.get('/product', productController.getProduct);
router.get('/product/1', productController.getProductId);

module.exports = router;