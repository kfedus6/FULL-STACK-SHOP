const { Brand } = require('../models/models');

class BrandController {
   async create(req, res) {
      res.json({ 'create': 'brand' })
   }
   async getBrand(req, res) {
      res.json({ 'get': 'getBrand' })
   }
};

const brandController = new BrandController();

module.exports = brandController;