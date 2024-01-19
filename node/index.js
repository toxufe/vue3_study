const express = require('express')
const app = express()


// 创建get请求
app.get('/xm', (req, res) => {
    res.json({
        code:200,
        message:"请求陈功"
    })
})


// 监听端口
app.listen(3000, () => {
    console.log('server start')
})