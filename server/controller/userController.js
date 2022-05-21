const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');
const bcrypt = require('bcrypt')

class UserController {
   async registration(req, res) {
      const { email, password, admin } = req.body
      if (email == undefined) {
         return res.status(400).json({ 'error': 'uncorrect email' })
      } else if (password == undefined) {
         return res.status(400).json({ 'error': 'uncorrect password' })
      }

      const findUser = await User.findOne({ where: { email } })

      if (findUser !== null) {
         return res.status(400).json({ 'error': 'this email registation' })
      }

      const bcryptPassword = await bcrypt.hash(password, 5)
      const user = await User.create({ email, bcryptPassword, admin })
      const basket = await Basket.create({ userId: user.id })

      const token = jwt.sign({ email }, process.env.codeSecret, { expiresIn: '1h' })
      res.json({ token })
   }

   async login(req, res) {
      const { email, password, admin } = req.body
      const emailUser = await User.findOne({ where: { email } })
      if (emailUser !== null) {
         return res.status(400).json({ 'message': 'error login' })
      }

      const token = jwt.sign({ email, admin }, process.env.codeSecret, { expiresIn: '1h' })
      res.json({ token })
   }

   async authorization(req, res) {
      const { email, password, admin } = req.body
      const emailUser = await User.findOne({ where: { email } })
      if (emailUser == null) {
         return res.status(400).json({ 'message': 'not find email' })
      }

      const token = jwt.sign({ email }, process.env.codeSecret, { expiresIn: '1h' })
      res.json({ token })
   }
};

//JWT / sequelize methods
//проверить если пользователь с таким логинов и выкинуть если есть 
//если нет сгенировать новый токен и вернуть его добавив в него роль
const userController = new UserController();

module.exports = userController;