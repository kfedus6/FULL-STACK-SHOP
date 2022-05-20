const Router = require('express');
const router = new Router();
const productController = require('../controller/productController');

router.post('/', productController.create);
router.get('/', productController.getProduct);
router.get('/1', productController.getProductId);

module.exports = router;