const Sequelize=require('sequelize')
const sequelize=require('../util/database')
const product=sequelize.define('Product',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true 
  },
  title:Sequelize.STRING,
  imageUrl:Sequelize.STRING,
  description:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  }
  
}) 
module.exports=product