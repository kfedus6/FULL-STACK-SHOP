const { Basket, BasketProduct, Product } = require('../models/models')
const ApiError = require('../error/apiError');

class BasketController {
    async addProduct(req, res, next) {
        const { userId, productId } = req.body

        const basket = await Basket.findOne({ where: { userId } })
        const product = await Product.findOne({ where: { id: productId } })
        if (basket && product) {
            const basketProduct = await BasketProduct.create({ basketId: basket.id, productId: product.id })
            basketProduct.save()
            return res.json(product)
        } else {
            return next(ApiError.badRequest('undefined'))
        }
    }

    async getProduct(req, res, next) {
        const { id } = req.params

        const basket = await Basket.findOne({ where: { userId: id } })
        const basketProducts = await BasketProduct.findAll({ where: { basketId: basket.id } })
        const products = []

        if (id == undefined) {
            return next(ApiError.badRequest('userId undefined'))
        } else if (basket == null) {
            return next(ApiError.badRequest('basket undefined'))
        } else if (basketProducts == null) {
            return next(ApiError.badRequest('basketProduct undefined'))
        }

        for (const bp of basketProducts) {
            const product = await Product.findOne({ where: { id: bp.productId } })
            products.push(product)
        }
        return res.json(products)
    }

    async deleteBasketProduct(req, res, next) {
        const { id } = req.params
        console.log(id)
        if (id === undefined) {
            return next(ApiError.badRequest('id undefined'))
        }

        const delProduct = await Product.findOne({ where: { id } })
        const findBasketProduct = await BasketProduct.destroy({ where: { productId: id } })

        if (findBasketProduct === null) {
            return next(ApiError.badRequest('basket product id undefined'))
        }

        return res.json(delProduct)
    }
};

const basketController = new BasketController();

module.exports = basketController;