const Router = require('express');
const router = new Router();
const userController = require('../controller/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/authorization', userController.authorization);

module.exports = router;