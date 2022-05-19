const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

class UserController {
   async registration(req, res) {
      const { email, password, admin } = req.body
      const token = jwt.sign({ email, admin }, 'rufdhu23heuhd1231', { expiresIn: '1h' })
      res.json(token)
   }
   async login(req, res) {
      res.json({ 'hello': 'login' })
   }
   async authorization(req, res) {
      res.json({ 'hello': 'authorization' })
   }
};

const userController = new UserController();

module.exports = userController;