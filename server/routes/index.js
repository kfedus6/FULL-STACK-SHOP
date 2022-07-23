const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const basketRouter = require('./basketRouter');
const imagesProduct = require('./imagesPrductRouter');
const orderProductRouter = require('./orderProductRouter');
const commentRouter = require('./commentRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/basket', basketRouter);
router.use('/imagesProduct', imagesProduct);
router.use('/order', orderProductRouter);
router.use('/comment', commentRouter);

module.exports = router;