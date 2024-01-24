<script setup lang="ts">
import {} from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toPage = (url: string) => {
    // router.push(url);
    // router.push({ path: url });
    router.push({ name: url });
};
</script>

<template>
    <div class="">router</div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink style="margin-left: 10px" to="/about">About</RouterLink>

    <hr />
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink style="margin-left: 10px" :to="{ name: 'About' }">About</RouterLink>
    <hr />
    <!-- 有默认行为 会刷新页面 -->
    <a href="/">Home</a>
    <a style="margin-left: 10px" href="/about">About</a>

    <hr />
    <!--  编程式导航 -->
    <button @click="$router.push('/')">Home</button>
    <button style="margin-left: 10px" @click="$router.push('/about')">About</button>

    <hr />
    <button @click="toPage('/')">Home</button>
    <button style="margin-left: 10px" @click="toPage('/about')">About</button>

    <hr />
    <button @click="toPage('Home')">Home</button>
    <button style="margin-left: 10px" @click="toPage('About')">About</button>
    <RouterView></RouterView>
</template>

<style lang="scss" scoped></style>
