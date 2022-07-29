const Router = require('express');
const router = new Router();

const imagesProductController = require('../controller/imagesProductController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', adminMiddleware(true), imagesProductController.craeteImages);
router.post('/color/:id', adminMiddleware(true), imagesProductController.createColor);
router.get('/:id', imagesProductController.getImagesProduct);
router.get('/image/:id', imagesProductController.getImageProduct);
router.get('/color/:id', imagesProductController.getColor);

module.exports = router;