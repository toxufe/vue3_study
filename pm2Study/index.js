const express = require('express');
const app = express()
const os = require('os');

app.get('/index',(req,res)=>{
    console.log("index------------");
    res.json({
        code:200,
        message:"满神最帅123~~~",
        os:os.cpus()
    })
})

app.listen('9999',()=>{
    console.log("index.js========","http://localhost:9999/index")
})