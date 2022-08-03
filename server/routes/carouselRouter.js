const Router = require('express')
const router = new Router()
const adminMiddleware = require('../middleware/adminMiddleware')

const carouselController = require('../controller/carouselController')

router.post('/', carouselController.postCarousel)
router.get('/', carouselController.getCarousel)
router.delete('/:id', carouselController.deleteCarousel)

module.exports = router