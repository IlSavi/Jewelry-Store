const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketJewelry = sequelize.define('basket_jewelry',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Jewelry = sequelize.define('jewelry',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const  Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Material = sequelize.define('material',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const JewelryInfo = sequelize.define('jewelry_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const TypeMaterial = sequelize.define('type_material',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketJewelry)
BasketJewelry.belongsTo(Basket)

Type.hasMany(Jewelry)
Jewelry.belongsTo(Type)

Material.hasMany(Jewelry)
Jewelry.belongsTo(Material)

Jewelry.hasMany(Rating)
Rating.belongsTo(Jewelry)

Jewelry.hasMany(BasketJewelry)
BasketJewelry.belongsTo(Jewelry)

Jewelry.hasMany(JewelryInfo, {as: 'info'});
JewelryInfo.belongsTo(Jewelry)

Type.belongsToMany(Material, {through: TypeMaterial})
Material.belongsToMany(Type, {through: TypeMaterial})

module.exports = {
    User,
    Basket,
    BasketJewelry,
    Jewelry,
    Type,
    Material,
    Rating,
    TypeMaterial,
    JewelryInfo
}