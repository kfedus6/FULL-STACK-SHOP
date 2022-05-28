const { Product, ProductInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path')

class ProductController {
    async create(req, res) {
        let { name, price, brandId, typeId, info } = req.body
        const { img } = req.files
        const fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const product = await Product.create({ name: name, price: price, brandId: brandId, typeId: typeId, img: fileName })

        if (info != undefined) {
            info = JSON.parse(info)
            for (let item of info) {
                await ProductInfo.create({ productId: product.id, name: item.name, description: item.description })
            }
        }

        return res.json({ product })
    }
    async getProducts(req, res) {
        return res.json({ "getProduct": "getProduct" })
    }
    async getProductId(req, res) {
        return res.json({ "getProductId": "getProductId" })
    }
};

const productController = new ProductController();

module.exports = productController;

//Создать новый проект блог
//Есть посты и есть авторы в бд
//У постов есть картинки, у автором есть аватарки
//Использовать SEQUALISE + UUID + JWT token + PATH + MIDDLEWARE + CRYPT
// cоздать, получить, удалить, получить одного 