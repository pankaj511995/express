const express=require('express')
const bodyparser=require('body-parser')
const adminproduct=require('./router/admin')
const shopProduct=require('./router/shop')
const error404=require('./router/error')
const app=express()
app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminproduct)
app.use('/shop',shopProduct)
app.use(error404)

app.listen(3000)