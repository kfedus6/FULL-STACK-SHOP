const { ImagesProduct } = require('../models/models')
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/apierror');

class ImagesProductController {
    async craeteImages(req, res) {
        const { productId, color } = req.body
        const { img } = req.files

        const fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const imageProduct = await ImagesProduct.create({ img: fileName, color: color, productId: productId })

        return res.json(imageProduct)
    }

    async getImagesProduct(req, res, next) {
        const { id } = req.params

        if (id === undefined) {
            return next(ApiError.badRequest('img undfined'))
        }

        const images = await ImagesProduct.findAll({ where: { productId: id } })

        return res.json(images)
    }

};

const imagesProductController = new ImagesProductController();

module.exports = imagesProductController;