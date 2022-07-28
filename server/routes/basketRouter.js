const Router = require('express');
const router = new Router();

const basketController = require('../controller/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:id', authMiddleware, basketController.addProduct)
router.get('/', authMiddleware, basketController.getProduct);
router.delete('/:id', authMiddleware, basketController.deleteBasketProduct);
router.delete('/products/:id', authMiddleware, basketController.deleteAllBasketProduct);
module.exports = router;