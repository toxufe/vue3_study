<template>
    <h1>Vue3 环境变量</h1>


<!-- 
    1	import.meta.env.MODE	string	应用运行的模式
    2	import.meta.env.BASE_URL	string	部署应用时的基本 URL。他由base 配置项决定。
    3	import.meta.env.PROD	boolean	应用是否运行在生产环境。
    4	import.meta.env.DEV	boolean	应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
    5	import.meta.env.SSR	boolean	应用是否运行在 server 上。
    ————————————————
    版权声明：本文为CSDN博主「海纳老吴」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    原文链接：https://blog.csdn.net/sensor_WU/article/details/129723074

    境变量文件位置说明
    .env                # 所有情况下都会加载
    .env.local          # 所有情况下都会加载，但会被 git 忽略
    .env.[mode]         # 只在指定模式下加载
    .env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
    ————————————————
    版权声明：本文为CSDN博主「海纳老吴」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    原文链接：https://blog.csdn.net/sensor_WU/article/details/129723074


    # //开发.env.development / production
    VITE_MODE_NAME=development 
    VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。

    预发布
    vite build --mode staging
    # .env.staging
    VITE_APP_TITLE=My App (staging)

    npm install http-server -g
    hs -p 9002
-->

</template>
<script setup lang="ts">

console.log(import.meta.env);

</script>

<style lang="scss" scoped>
</style>
