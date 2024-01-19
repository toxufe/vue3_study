<template>
    <h1>Proxy 跨域</h1>

<!-- 

主要是出于浏览器的同源策略限制，它是浏览器最核心也最基本的安全功能。

当一个请求url的 协议、域名、端口 三者之间任意一个与当前页面url不同即为跨域。

例如 http://xxxx.com -> https://xxxx.com 存在跨域 协议不同

例如 127.x.x.x:8001 -> 127.x.x.x:8002 存在跨域 端口不同

例如 www.xxxx.com -> www.yyyy.com 存在跨域 域名不同
————————————————
版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq1195566313/article/details/128081558

jsonp 这种方式在之前很常见，他实现的基本原理是利用了HTML里script元素标签没有跨域限制 动态创建script标签，将src作为服务器地址，服务器返回一个callback接受返回的参数，这样就实现了跨域。百度使用

后端设置
"Access-Control-Allow-Origin": "http://web.xxx.com" //可以指定地址
"Access-Control-Allow-Origin": "*" //也可以使用通配符 任何地址都能访问 安全性不高 一般不使用 读取不到cookie

-->

    
</template>
<script setup lang="ts">
fetch('http://localhost:3000/xm').then(res => {
    console.log(res)
})
</script>

<style lang="scss" scoped></style>
