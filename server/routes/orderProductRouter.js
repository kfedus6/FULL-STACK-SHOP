const Router = require('express');
const router = new Router();

const orderProductController = require('../controller/orderProductController');

router.post('/', orderProductController.create);
router.get('/', orderProductController.getOrderProduct);
router.delete('/:id', orderProductController.deleteOrderProduct);

module.exports = router;