const Router = require('express');
const router = new Router();
const productController = require('../controller/productController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', adminMiddleware(true), productController.create);
router.get('/', productController.getProducts);
router.get('/newProducts', productController.newProducts);
router.get('/:id', productController.getProductId);
router.delete('/:id', adminMiddleware(true), productController.deleteProduct);

module.exports = router;