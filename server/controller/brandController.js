const ApiError = require('../error/apierror');
const { Brand } = require('../models/models');

class BrandController {
    async create(req, res, next) {
        const { name } = req.body

        if (name == undefined) {
            return next(ApiError.badRequest('incorrect name'))
        } else if (name == "") {
            return next(ApiError.badRequest('name undefined'))
        }

        const brand = await Brand.create({ name })

        return res.json(brand)
    }

    async getBrands(req, res) {
        const brand = await Brand.findAll()
        return res.json(brand)
    }
};

const brandController = new BrandController();

module.exports = brandController;