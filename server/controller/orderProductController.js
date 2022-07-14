const { OrderProduct, Order, Product } = require('../models/models');
const ApiError = require('../error/apierror');

class OrderProductController {
    async create(req, res) {
        const { userId, sum, phone, name, products, } = req.body
        const order = await Order.create({ userId: userId, sum: sum, phone: phone, name: name })
        for (let product of products) {
            await OrderProduct.create({ count: product.count, orderId: order.id, productId: product.product.id })
        }
        return res.json({ order })
    }

    async getOrderProduct(req, res, next) {
        const { id } = req.params

        if (id === undefined) {
            console.log('1')
            return next(ApiError.badRequest('undefined orderId'))
        } else {
            console.log('2')
            const orderProduct = await OrderProduct.findAll({ where: { orderId: id } })
            return res.json(orderProduct)
        }
    }

    async getOrderProducts(req, res) {
        const { id } = req.params
        const orderProduct = await OrderProduct.findAll({ where: { orderId: id } })
        let products = []
        for (let item of orderProduct) {
            products.push(await Product.findOne({ where: { id: item.productId } }))
        }
        return res.json(products)
    }

    async getOrders(req, res) {
        const orders = await Order.findAll()
        return res.json(orders)
    }

    async getOrder(req, res) {
        const { id } = req.params
        const order = await Order.findOne({ where: { id } })
        return res.json(order)
    }

    async putStatus(req, res) {
        const { status, id } = req.body
        await Order.update({ status: status }, { where: { id } })
        const order = await Order.findOne({ where: { id } })
        return res.json(order)
    }
};

const orderProductController = new OrderProductController()

module.exports = orderProductController;