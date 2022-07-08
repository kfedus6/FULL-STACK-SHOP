const Router = require('express');
const router = new Router();

const orderProductController = require('../controller/orderProductController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', authMiddleware, orderProductController.create);
router.get('/product/:id', adminMiddleware(true), orderProductController.getOrderProduct);
router.get('/order', adminMiddleware(true), orderProductController.getOrder);
router.put('/', adminMiddleware(true), orderProductController.putStatus);
router.delete('/:id', adminMiddleware(true), orderProductController.deleteOrderProduct);

module.exports = router;