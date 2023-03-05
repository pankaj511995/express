const mysql=require('mysql2')
require('dotenv').config()
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node_complete',
    password:process.env.PASSWORD

})
module.exports=pool.promise()