const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');
const bcrypt = require('bcrypt');
const ApiError = require('../error/apierror');

class UserController {
   async registration(req, res, next) {
      const { email, password, admin } = req.body
      if (email == undefined) {
         return next(ApiError.badRequest('incorrect email'))
      } else if (password == undefined) {
         return next(ApiError.badRequest('incorrect password'))
      }

      const findUser = await User.findOne({ where: { email } })

      if (findUser !== null) {
         return next(ApiError.badRequest('this email is registered'))
      }

      const bcryptPassword = await bcrypt.hash(password, 5)
      const user = await User.create({ email: email, password: bcryptPassword, admin: admin })
      const basket = await Basket.create({ userId: user.id })

      const token = jwt.sign({ email }, process.env.codeSecret, { expiresIn: '1h' })
      res.json({ token })
   }

   async login(req, res) {
      const { email, password } = req.body
      const emailUser = await User.findOne({ where: { email } })
      if (emailUser == null) {
         return next(ApiError.notFound('this email is not registered'))
      }

      let resPassword = bcrypt.compareSync(password, emailUser.password)

      if (resPassword == false) {
         return next(ApiError.badRequest('incorrect password'))
      }

      const token = jwt.sign({ email: email, admin: emailUser.admin }, process.env.codeSecret, { expiresIn: '1h' })
      res.json({ token })
   }

   async authorization(req, res) {
      const token = jwt.sign({ email }, process.env.codeSecret, { expiresIn: '1h' })
      res.json({ token })
   }
};

const userController = new UserController();

module.exports = userController;