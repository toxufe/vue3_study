<template>
    <h1>TSX</h1>

    <!-- 插件安装
    npm install @vitejs/plugin-vue-jsx --save-dev
    配置 vite.config.js
    import { defineConfig } from "vite";
    import uni from "@dcloudio/vite-plugin-uni";
    import vueJsx from '@vitejs/plugin-vue-jsx'

    export default defineConfig({
    plugins: [
        uni(),
        vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
        })
    ],
    });

    1. 直接导出一个渲染函数
    2. options api
    3. setup 函数模式
    v-show 可以使用
    ref tempate 会自动解包。tsx中并不会
    v-if 不支持  js三元表达式 代替
    js的编程思想 js三元表达式

    map 代替 v-for

    单花括号 代替 v-bind

    props emits

    -->

    <xxx name="name属性传递"></xxx>
</template>
<script setup lang="ts">
import xxx from './App'
</script>
<style scoped lang="scss"></style>
