const express=require('express')

const router=express.Router()

router.use((req,res)=>{
    res.status(404).send(`<h1>page not found</h1>`)
})

module.exports=router