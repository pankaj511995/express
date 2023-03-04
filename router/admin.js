const express=require('express')
const path=require('path')
const router=express.Router()

router.use('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','admin.html'))
})
module.exports=router