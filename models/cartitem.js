const { Sequelize } = require('sequelize')
const sequelize=require('../util/database')
const cartitem=sequelize.define('cartItem',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    quantity:Sequelize.INTEGER
})

module.exports=cartitem