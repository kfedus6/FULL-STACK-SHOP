const { OrderProduct, Order } = require('../models/models');

class OrderProductController {
    async create(req, res) {
        const { userId, sum, phone, name, products, } = req.body

        const order = await Order.create({ userId: userId, sum: sum, phone: phone, name: name })
        let orderProduct
        for (let product of products) {
            orderProduct = await OrderProduct.create({ count: product.count, orderId: order.id, productId: product.product.id })
        }
        return res.json({ orderProduct })
    }

    async getOrderProduct(req, res) {
        const { userId } = req.body
        const order = await Order.findAll({ where: { userId } })
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