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

        return res.json(product)
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

        /* 
                if (Object.keys(req.query).length == 0) {
                    product = await Product.findAndCountAll({ limit: Number(limit), offset: Number(offset) })
                    console.log(req.query, 1)
                } else {
                    console.log(2)
                    console.log(isNaN(brandId), isNaN(typeId))
                    if (isNaN(brandId) == false && isNaN(typeId) == false) {
                        console.log('if')
                        product = await Product.findAndCountAll({ limit: Number(limit), offset: Number(offset) })
                    } else if (isNaN(brandId) !== false && isNaN(typeId) == false) {
                        product = await Product.findAndCountAll({ where: { brandId } }, { limit: Number(limit), offset: Number(offset) })
                    } else if (isNaN(typeId) !== false && isNaN(brandId) == false) {
                        product = await Product.findAndCountAll({ where: { typeId } }, { limit: Number(limit), offset: Number(offset) })
                    } else if (isNaN(brandId) !== false && isNaN(typeId) !== false) {
                        product = await Product.findAndCountAll({ where: { typeId, brandId } }, { limit: Number(limit), offset: Number(offset) })
                    }
                }
         */


        /*
        if (brandId == undefined && typeId == undefined) {
            product = await Product.findAndCountAll({ limit: Number(limit), offset: Number(offset) })
        } else if (brandId !== undefined) {
            product = await Product.findAndCountAll({ where: { brandId } }, { limit: Number(limit), offset: Number(offset) })
        } else if (typeId !== undefined) {
            product = await Product.findAndCountAll({ where: { typeId } }, { limit: Number(limit), offset: Number(offset) })
        } else if (brandId !== undefined && typeId !== undefined) {
            product = await Product.findAndCountAll({ where: { typeId, brandId } }, { limit: Number(limit), offset: Number(offset) })
        }
        */

        return res.json(product)
    }
    async getProductId(req, res) {
        const { id } = req.params
        const product = await Product.findOne({ where: { id }, include: [{ model: ProductInfo, as: 'info' }] })
        return res.json({ product })
    }
};

const productController = new ProductController();

module.exports = productController;

