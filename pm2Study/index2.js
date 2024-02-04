
const express = require('express');


var num = 1


const app = express()

app.get('/index', (req, res) => {

    res.json({
        code: 200,
        message: "满神最帅~~~"
    })

    console.log("Nginx 负载均衡8888", num)
    num++
})

app.listen('8888', () => {
    console.log("index2.js========", "http://localhost:8888/index2")
})