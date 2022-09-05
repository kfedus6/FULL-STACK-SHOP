const { CarouselImages } = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class CarouselController {
    async postCarousel(req, res) {
        const { name } = req.body
        const { img } = req.files

        const fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const carousel = await CarouselImages.create({ name: name, image: fileName })
        return res.json(carousel)
    }

    async getCarousel(req, res) {
        const carousel = await CarouselImages.findAll()
        return res.json(carousel)
    }

    async deleteCarousel(req, res) {
        const { id } = req.params
        const carousel = await CarouselImages.findOne({ where: { id } })
        await CarouselImages.destroy({ where: { id } })
        return res.json(carousel)
    }
}

const carouselController = new CarouselController()
module.exports = carouselController