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
    price: { type: DataTypes.INTEGER },
    img: { type: DataTypes.STRING }
});

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true }
});

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true }
});

const BasketProduct = sequelize.define('busketproduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const ProductInfo = sequelize.define('productinfo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
});

const BrandType = sequelize.define('brandtype', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const ImagesProduct = sequelize.define('imagesProduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING }
});

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sum: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    status: { type: DataTypes.BOOLEAN, defaultValue: null }
})

const OrderProduct = sequelize.define('orderProduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    count: { type: DataTypes.STRING }
})

const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.STRING }
})

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo, { as: 'info' });
ProductInfo.belongsTo(Product);

Type.hasMany(Product);
Product.belongsTo(Type);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Type.belongsToMany(Brand, { through: BrandType });
Brand.belongsToMany(Type, { through: BrandType });

Product.hasMany(ImagesProduct);
ImagesProduct.belongsTo(Product);

User.hasMany(Order);
Order.belongsTo(User)

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);

Product.hasMany(Comment)
Comment.belongsTo(Product)

User.hasMany(Comment)
Comment.belongsTo(User)

module.exports = { User, Basket, Product, Type, Brand, BasketProduct, ProductInfo, BrandType, ImagesProduct, OrderProduct, Order, Comment };