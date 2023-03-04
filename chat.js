const express=require('express')
const bodyparser=require('body-parser')
const fs=require('fs')
const chat=express()
chat.use(bodyparser.urlencoded())

chat.get('/login',(req,res,next)=>{
    res.send(`<form action="/chat" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('name').value)">
    <input type="text" id="name">
    <input type="submit" value="send"> </form>`)
})

chat.use('/chat',(req,res)=>{
    const data=fs.readFileSync('chat.txt','utf-8')
    res.send(`<div>${data}</div> <form action="/message" method="POST" onsubmit="document.getElementById('name').value=localStorage.getItem('username')">
    <input type="hidden" id="name" name="username">
    <input type="text" name="message">
    <input type="submit" value="message"> </form>`)
   
})
chat.use('/message',(req,res)=>{
    const message=`${req.body.username}::${req.body.message}`
     fs.writeFile('chat.txt',message,{flag:'a'}, err=>{
        res.redirect('/chat')
     })
})

 
chat.listen(3000)