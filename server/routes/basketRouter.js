const Router = require('express');
const router = new Router();

const basketController = require('../controller/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, basketController.addProduct)
router.get('/', authMiddleware, basketController.getProduct);
router.delete('/:id', authMiddleware, basketController.deleteBasketProduct);
module.exports = router;