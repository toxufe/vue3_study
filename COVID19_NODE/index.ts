import express, { Express, Router, Request, Response, NextFunction } from 'express'
import axios from 'axios'
const app: Express = express()

// 跨域处理
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


// router 是用来分模块的
// node.js 中的 express 的Router路由的作用，为了方便我们更好的管理我们的路由，把不同的路由分离到不同的文件中，方便管理和维护
const router: Router = express.Router()

app.use('/api', router); // 用来使用中间件

router.get('/list', async (req: Request, res: Response) => {
    // let result = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=341182141440')

    let result = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total')

    

    res.json({
        data: result.data
    });

});

let port = 3000;
app.listen(port, () => {
    console.log(`server is running!!! http://localhost:${port}`);
});