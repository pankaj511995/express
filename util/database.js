const Sequelize=require('sequelize')
require('dotenv').config()
const sequelize=new Sequelize('node_complete','root',process.env.PASSWORD,{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize




// const mysql=require('mysql2')
// 
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node_complete',
//     password:process.env.PASSWORD

// })
// module.exports=pool.promise()