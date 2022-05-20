const Router = require('express');
const router = new Router();
const typeContoller = require('../controller/typeController');

router.post('/', typeContoller.create);
router.get('/', typeContoller.getType);

module.exports = router;