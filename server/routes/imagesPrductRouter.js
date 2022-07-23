const Router = require('express');
const router = new Router();

const imagesProductController = require('../controller/imagesProductController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', adminMiddleware(true), imagesProductController.craeteImages);
router.get('/:id', imagesProductController.getImagesProduct);

module.exports = router;