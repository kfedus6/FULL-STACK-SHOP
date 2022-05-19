require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');

const server = express(router);

server.use(express.json());
server.use('/api', router);

const PORT = process.env.PORT;

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
};

start();