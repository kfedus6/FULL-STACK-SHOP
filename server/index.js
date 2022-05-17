require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const server = express();

server.use(express.json())

const PORT = process.env.PORT

const { User } = require('./models/models')
server.post('/addUser', async (req, resp) => {
   const user = await User.create({ email: req.body.email, password: req.body.password })
   return resp.json(user)
})

const start = async () => {
   try {
      await sequelize.authenticate()
      await sequelize.sync()
      server.listen(PORT, () => {
         console.log('server start on port ' + PORT)
      })
   } catch (e) {
      console.log(e)
   }
}

start()