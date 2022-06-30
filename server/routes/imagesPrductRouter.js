const Router = require('express');
const router = new Router();

const imagesProductController = require('../controller/imagesProductController');

router.post('/', imagesProductController.craeteImages);
router.get('/:id', imagesProductController.getImagesProduct);

module.exports = router;