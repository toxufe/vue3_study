<template>
    <h1>全局函数和变量</h1>
    <hr>
    <div>全局变量：{{$env}}</div>
    <div>全局函数：{{$filter.filter("的cat")}}</div>
</template>
<script setup lang="ts">
    import { getCurrentInstance } from 'vue';
    const app = getCurrentInstance();
    console.log(app?.proxy?.$env);
    console.log(app?.proxy?.$filter.filter("的cat1111111111111"));
</script>
<style lang="scss" scoped></style>
