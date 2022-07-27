const Router = require('express');
const router = new Router();

const orderProductController = require('../controller/orderProductController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', authMiddleware, orderProductController.create);
router.get('/product/:id', orderProductController.getOrderProduct);
router.get('/products/:id', adminMiddleware(true), orderProductController.getOrderProducts);
router.get('/', adminMiddleware(true), orderProductController.getOrders);
router.get('/:id', adminMiddleware(true), orderProductController.getOrder);
router.put('/', adminMiddleware(true), orderProductController.putStatus);

module.exports = router;