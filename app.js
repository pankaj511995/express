const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log('i am first')
    next()
})
app.get('/add-product',(req,res,next)=>{
    res.send(`<form action="/" method="POST">
    <input type="text" name="prosuct">
    <input type="number" name="size">
    <button>send</button> </form>`)
    
})
app.post('/',(req,res,next)=>{
    console.log(req.body)
})
app.listen(3000)