const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   email: { type: DataTypes.STRING, unique: true },
   password: { type: DataTypes.STRING },
   admin: { type: DataTypes.BOOLEAN, defaultValue: false }
});

const Basket = sequelize.define('basket', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define('product', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING },
   price: { type: DataTypes.STRING },
   img: { type: DataTypes.STRING }
});

User.hasOne(Basket);
Basket.belongsTo(User);

module.exports = { User, Product };