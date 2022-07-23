const { Basket, BasketProduct, Product } = require('../models/models')
const ApiError = require('../error/apiError');

class BasketController {
    async addProduct(req, res, next) {
        const { userId } = req.user
        const { productId } = req.body

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
        const { userId } = req.user

        const basket = await Basket.findOne({ where: { userId: userId } })
        const basketProducts = await BasketProduct.findAll({ where: { basketId: basket.id } })
        const products = []

        if (basket == null) {
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

    async deleteAllBasketProduct(req, res) {
        const { id } = req.params

        const products = await BasketProduct.findAll({ where: { basketId: id } })
        const deleteProduct = await BasketProduct.destroy({ where: { basketId: id } })

        return res.json(products)
    }

};

const basketController = new BasketController();

module.exports = basketController;