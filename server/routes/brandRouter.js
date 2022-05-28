const Router = require('express');
const router = new Router();
const brandController = require('../controller/brandController');

router.post('/', brandController.create);
router.get('/', brandController.getBrands);

module.exports = router;