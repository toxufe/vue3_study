const express = require('express');
var num = 1
const app = express()
const os = require('os');

app.get('/index',(req,res)=>{
    res.json({
        code:200,
        message:"满神最帅123~~~",
        os:os.cpus()
    })
    
    console.log("Nginx 负载均衡9999", num)
    num++
})

app.listen('9999',()=>{
    console.log("index.js========","http://localhost:9999/index")
})