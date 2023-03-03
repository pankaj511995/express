const express=require('express')
const app=express()
app.use((req,res,next)=>{
    console.log('i am first')
    next()
})
app.use((req,res,next)=>{
    console.log('i am second')
    
})

app.listen(3000)