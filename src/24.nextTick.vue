<template>
    <h1>event loop 和 nextTick</h1>
    <!-- 

        vue 视图更新是异步的
        1.当数据发生变化时，视图不会立即更新，而是等待同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
        2.如果某个数据被同步修改了多次，那么视图只会更新一次。
        3.如果我们想要在数据变化之后立即使用更新后的DOM结构，可以使用Vue.nextTick(callback)。
        数据更新是同步的，视图更新是异步的。

        nextTick使用方法
        1. 异步函数模式
        2. async await 方法

        60FPS 1000/60 = 16.67ms


        Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。
当你设置 改变了一个新数据data，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。


     -->
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped></style>
