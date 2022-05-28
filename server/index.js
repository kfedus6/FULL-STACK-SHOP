require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const errorMiddleware = require('./middleware/errorMiddleware');
const models = require('./models/models');
const router = require('./routes/index');
const fileUpload = require('express-fileupload')
const path = require('path');
const server = express(router);

server.use(express.json());
server.use(fileUpload({}))
server.use('/api', router);
server.use(express.static(path.resolve(__dirname, 'static')));
server.use(errorMiddleware)

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