<template>
    <h1>Vue3 性能优化</h1>
    <!-- 
        浏览器分析网页加载情况
        1. 打开开发者工具
        2. 选择 lighthouse
        3. 分析网页加载情况(设置根据实际情况选择)


        分析打包完代码的体积
        npm install rollup-plugin-visualizer
        vite.config.ts
        import {visualizer} from 'rollup-plugin-visualizer'
        plugins: [
            vue(),
            visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true
            })
        ]

        Vite优化项
        build:{
            chunkSizeWarningLimit: 2000,// 区块大小警告限制
            cssCodeSplit: true,// css代码分割
            sourcemap: false,// 是否生成sourcemap 生产环境不需要
            minify: 'terser',// 压缩器 默认terser 体积小 也可以使用esbuild 打包块
            assetsInlineLimit: 4096,// 小于4kb的文件转换成base64
        }
     -->

    <!-- pwa 离线缓存技术 -->
    <!-- 

        PWA离线存储技术
npm install vite-plugin-pwa -D
import { VitePWA } from 'vite-plugin-pwa' 
plugins: [vue(),VitePWA(), vueJsx(),visualizer({
      open:true
})],
PWA 技术的出现就是让web网页无限接近于Native 应用

可以添加到主屏幕，利用manifest实现
可以实现离线缓存，利用service worker实现
可以发送通知，利用service worker实现

————————————————
版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq1195566313/article/details/126811832

        npm install vite-plugin-pwa
        vite.config.ts
        import { VitePWA } from 'vite-plugin-pwa'
    
        VitePWA({
            workbox:{
                cacheId:"XIaoman",//缓存名称
                runtimeCaching:[
                    {
                    urlPattern:/.*\.js.*/, //缓存文件
                    handler:"StaleWhileRevalidate", //重新验证时失效
                    options:{
                        cacheName:"XiaoMan-js", //缓存js，名称
                        expiration:{
                        maxEntries:30, //缓存文件数量 LRU算法
                        maxAgeSeconds:30 * 24 * 60 * 60 //缓存有效期
        
                        }
                    }
                    }
                ]
            },
            })


            其他性能优化
            图片懒加载 
            import lazyPlugin from 'vue3-lazy'
            <img v-lazy="user.avatar" >


            虚拟列表 elementPlus 提供

            多线程 使用  new Worker 创建

worker脚本与主进程的脚本必须遵守同源限制。他们所在的路径协议、域名、端口号三者需要相同

const myWorker1 = new Worker("./calcBox.js"); vueuse 已经继承
都使用postMessage发送消息

worker.postMessage(arrayBuffer, [arrayBuffer]);
都使用onmessage接收消息

self.onmessage = function (e) {
 // xxx这里是worker脚本的内容
};
关闭

worker.terminate();    
————————————————
版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq1195566313/article/details/126811832



防抖节流 vueuse 已经集成
防抖：在一定时间内，只执行最后一次操作
节流：在一定时间内，只执行第一次操作

      -->
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped></style>
