const { OrderProduct } = require('../models/models');

class OrderProductController {
    async create(req, res) {
        const { userId, productId, color, size, count, price } = req.body
        const order = await OrderProduct.create({ userId: userId, productId: productId, color: color, size: size, count: count, price: price })
        return res.json(order)
    }

    async getOrderProduct(req, res) {
        const { userId } = req.body
        const order = await OrderProduct.findAll({ where: { userId } })
        return res.json(order)
    }

    async deleteOrderProduct(req, res) {
        const { userId } = req.params
        const order = await OrderProduct.destroy({ where: { userId } })
        return res.json(order)
    }
}

const orderProductController = new OrderProductController()

module.exports = orderProductController;