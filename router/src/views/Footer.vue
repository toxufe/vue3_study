<script setup lang="ts">
import {} from "vue"
</script>

<template>
<h1>父路由</h1>
<div class="menu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about/1">About1</RouterLink>
    <RouterLink to="/about/2">About2</RouterLink>
    <RouterLink to="/about/3">About3</RouterLink>
</div>
<hr>
<RouterView></RouterView>
</template>

<style lang="scss" scoped>
a {
    margin: 0 10px;
}
</style>
