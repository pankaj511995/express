const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')
const adminproduct=require('./router/admin')
const shopProduct=require('./router/shop')
const contact=require('./router/contactus')
const error404=require('./router/error')
const app=express()
app.use(bodyparser.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminproduct)
app.use('/shop',shopProduct)
app.use('/contactus',contact)
app.post('/success',(req,res)=>{
    res.send(`<h1>status success name is ${req.body.name} and email is ${req.body.email}</h1>`)
})
app.use(error404)

app.listen(3000)