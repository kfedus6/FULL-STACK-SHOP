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
        console.log("ID=", typeof (id))
        let arrOrderProducts = []
        if (id == 'undefined') {
            console.log("1")

            const orders = await Order.findAll({ where: { status: true } })

            for (let item of orders) {
                const orderProduct = await OrderProduct.findAll({
                    where: { orderId: item.id }, include: [
                        { model: Product, attributes: ['name'] }
                    ]
                })
                arrOrderProducts.push(...orderProduct)
            }

            const finalyResult = []
            //DZ

            //[{name:'t-shirt',count:4},]

            return res.json(arrOrderProducts)

        } else {
            console.log("2")
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
        const { id, name } = req.query

        let orders
        if (id === undefined && name === undefined) {
            orders = await Order.findAll()
        } else if (id !== undefined && name === undefined) {
            orders = await Order.findAll({ where: { id } })
        } else if (name !== undefined && id === undefined) {
            orders = await Order.findAll({ where: { name } })
        }

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