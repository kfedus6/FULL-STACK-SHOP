const { Type } = require('../models/models');

class TypeController {
   async create(req, res) {
      res.json({ 'create': 'type' });
   }
   async getType(req, res) {
      res.json({ 'get': 'getType' })
   }
};

const typeController = new TypeController();

module.exports = typeController;