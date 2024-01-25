<script setup lang="ts">
import {} from "vue";
import { useRouter } from "vue-router";


/**
 * replace 没有历史记录
 * router.replace()
 * <RouterLink replace></RouterLink>
 * 
 * router.back(-1)
 * router.back(1)
 * router.next()
 * 
 * 路由嵌套 使用常见 固定菜单，点击菜单，切换内容
 * 
 * 命名视图可以在同一级（同一个组件）中展示更多的路由视图，而不是嵌套显示。 命名视图可以让一个组件中具有多个路由渲染出口，这对于一些特定的布局组件非常有用。 命名视图的概念非常类似于“具名插槽”，并且视图的默认名称也是 default。
 * 
 */
// const router = useRouter();
// const toPage = (url: string) => {
//     // router.push(url);
//     // router.push({ path: url });
//     router.push({ name: url });
// };
</script>

<template>
    <!-- <div class="">router</div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink style="margin-left: 10px" to="/about">About</RouterLink>

    <hr />
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink style="margin-left: 10px" :to="{ name: 'About' }">About</RouterLink>
    <hr /> -->
    <!-- 有默认行为 会刷新页面 -->
    <!-- <a href="/">Home</a>
    <a style="margin-left: 10px" href="/about">About</a> -->

    <!-- <hr /> -->
    <!--  编程式导航 -->
    <!-- <button @click="$router.push('/')">Home</button>
    <button style="margin-left: 10px" @click="$router.push('/about')">About</button> -->

    <!-- <hr />
    <button @click="toPage('/')">Home</button>
    <button style="margin-left: 10px" @click="toPage('/about')">About</button>

    <hr />
    <button @click="toPage('Home')">Home</button>
    <button style="margin-left: 10px" @click="toPage('About')">About</button>-->
    
    <h1>路由插槽 命名视图</h1>
    <hr>
    <RouterView></RouterView> 
    <!-- <RouterView name="about"></RouterView> 
    <RouterView name="footer"></RouterView>  -->
</template>

<style lang="scss" scoped></style>
