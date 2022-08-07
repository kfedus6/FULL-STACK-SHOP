const { Product, ProductInfo, Type } = require('../models/models');
const uuid = require('uuid');
const path = require('path')
const ApiError = require('../error/apierror');

class ProductController {
    async create(req, res, next) {
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

        return res.json(product)
    }

    async newProducts(req, res) {
        const type = await Type.findAll()
        let result = []
        for (let item of type) {
            let products = await Product.findAll({ where: { typeId: item.id }, limit: 4, order: [["createdAt", "DESC"]] })
            result.push({ typeId: item.id, typeName: item.name, newProducts: products })
        }

        return res.json(result)
    }

    async getProducts(req, res) {
        let { brandId, typeId, limit, page } = req.query

        if (limit == undefined) {
            limit = 12
        }

        if (page == undefined) {
            page = 1
        }

        let offset = page * limit - limit
        let product

        if (brandId == undefined && typeId == undefined) {
            product = await Product.findAndCountAll({ limit: Number(limit), offset: Number(offset) })
        } else if (brandId !== undefined && typeId == undefined) {
            product = await Product.findAndCountAll({ where: { brandId } }, { limit: Number(limit), offset: Number(offset) })
        } else if (typeId !== undefined && brandId == undefined) {
            product = await Product.findAndCountAll({ where: { typeId } }, { limit: Number(limit), offset: Number(offset) })
        } else if (brandId !== undefined && typeId !== undefined) {
            product = await Product.findAndCountAll({ where: { typeId, brandId } }, { limit: Number(limit), offset: Number(offset) })
        }

        return res.json(product)
    }
    async getProductId(req, res) {
        const { id } = req.params
        const product = await Product.findOne({ where: { id }, include: [{ model: ProductInfo, as: 'info' }] })
        return res.json(product)
    }

    async deleteProduct(req, res) {
        const { id } = req.params
        const DeleteProduct = await Product.destroy({ where: { id } })
        const products = await Product.findAll()
        return res.json(products)
    }
};

const productController = new ProductController();

module.exports = productController;

