const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.HOST,
        port: process.env.PORT_DB
    }
);

module.exports = sequelize;