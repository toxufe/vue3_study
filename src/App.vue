<template>
    <h1>Vue3 开发 H5 适配</h1>

    <!-- 
        https://vueuse.org/
        封装了好多自定义的hooks useCssVar
    
    -->
    <!-- 
        全局切换字体大小
        全局主题的一个切换
     -->

    <!-- 
圣杯布局
圣杯布局（Holy Grail Layout）是一种经典的三栏布局，其中有一个主列位于文档流的前面，两个侧边列位于主列的两侧。这种布局通常用于创建具有主体内容和两个侧边栏的网页。目标是实现一个灵活的、响应式的布局，使得任何一栏可以是最高的，而整体的布局在任何时候都能够保持平衡。

px 固定的单位，不会随着屏幕的变化而变化
rem r = root 根元素 html 的字体大小
vw vh 相对于视口的宽高 375的屏幕 1vw = 3.75px
% 相对于父元素的宽高

设计给的设计稿尺寸是像素 px to viewport的插件
postcss
https://www.postcss.com.cn/
css 界的 babel
plugins/postcss-px-to-viewport.ts
tsnode.config.json
"plugins/**/*.{ts,tsx,js,jsx}"
允许隐式的any类型
"noImplicitAny": false
-->

    <header>
        <div>left</div>
        <div>center</div>
        <div>right</div>
    </header>

    <div>
        <button @click="update(36)">大</button>
        <button @click="update(24)">中</button>
        <button @click="update(14)">小</button>
    </div>
</template>
<script setup lang="ts">
import { useCssVar } from '@vueuse/core'
const update = (num:number)=>{
    const size = useCssVar('--size')
    size.value = num + 'px'

    // 原生api
    // document.documentElement.style.setProperty('--size', num + 'px')
    // document.documentElement.style.getPropertyPriority('--size')
}

</script>

<style lang="scss" scoped>
:root {
    --size:14px
}
header {
    display: flex;
    div {
        height: 50px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        font-size: var(--size);
    }
    div:nth-child(1) {
        background-color: #f00;
        width: 100px;
    }
    div:nth-child(2) {
        background-color: #0f0;
        flex: 1;
    }
    div:nth-child(3) {
        background-color: #00f;
        width: 100px;
    }
}
</style>
