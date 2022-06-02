const Router = require('express');
const router = new Router();
const typeContoller = require('../controller/typeController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', adminMiddleware(true), typeContoller.create);
router.get('/', typeContoller.getTypes);

module.exports = router;