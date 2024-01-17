<template>
    <h1>event loop 和 nextTick</h1>
    <img src="https://static.xuehuafei.cn/i/2024/01/16/65a5d5639f0a9.png" alt="">

    <!-- 
JS 执行机制
在我们学js 的时候都知道js 是单线程的如果是多线程的话会引发一个问题在同一时间同时操作DOM 一个增加一个删除JS就不知道到底要干嘛了，所以这个语言是单线程的但是随着HTML5到来js也支持了多线程webWorker 但是也是不允许操作DOM

单线程就意味着所有的任务都需要排队，后面的任务需要等前面的任务执行完才能执行，如果前面的任务耗时过长，后面的任务就需要一直等，一些从用户角度上不需要等待的任务就会一直等待，这个从体验角度上来讲是不可接受的，所以JS中就出现了异步的概念。

同步任务
代码从上到下按顺序执行

异步任务
1.宏任务
script(整体代码)、setTimeout、setInterval、UI交互事件、postMessage、Ajax

2.微任务
Promise.then catch finally、MutaionObserver、process.nextTick(Node.js 环境)

运行机制

所有的同步任务都是在主进程执行的形成一个执行栈，主线程之外，还存在一个"任务队列"，异步任务执行队列中先执行宏任务，然后清空当次宏任务中的所有微任务，然后进行下一个tick如此形成循环。

nextTick 就是创建一个异步任务，那么它自然要等到同步任务执行完成后才执行。
————————————————
版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq1195566313/article/details/125237755
     -->
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped></style>
