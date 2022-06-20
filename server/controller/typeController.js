const ApiError = require('../error/apierror');
const { Type } = require('../models/models');

class TypeController {
    async create(req, res, next) {
        const { name } = req.body;
        if (name == undefined) {
            return next(ApiError.badRequest('incorrect json'))
        } else if (name == "") {
            return next(ApiError.badRequest('name undefined'))
        }
        const type = await Type.create({ name })
        return res.json({ type })
    }

    async getTypes(req, res) {
        const type = await Type.findAll()
        return res.json(type)
    }
};

const typeController = new TypeController();

module.exports = typeController;