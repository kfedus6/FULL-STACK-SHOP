const Router = require('express');
const router = new Router();
const productController = require('../controller/productController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', productController.create);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductId);

module.exports = router;