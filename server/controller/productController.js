const { Product } = require('../models/models');

class ProductController {
   async create(req, res) {
      const { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      //uuid
      //path
      //middleware 
      res.json({ "create": "create" })
   }
   async getProduct(req, res) {
      res.json({ "getProduct": "getProduct" })
   }
   async getProductId(req, res) {
      res.json({ "getProductId": "getProductId" })
   }
};

const productController = new ProductController();

module.exports = productController;