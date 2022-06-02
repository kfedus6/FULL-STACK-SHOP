const Router = require('express');
const router = new Router();
const brandController = require('../controller/brandController');
const adminMiddleware = require('../middleware/adminMiddleware')


router.post('/', adminMiddleware(true), brandController.create);
router.get('/', brandController.getBrands);

module.exports = router;