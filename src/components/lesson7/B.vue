<script setup lang="ts">
import { inject, type Ref } from "vue";
let color = inject<Ref<string>>("color");// Ref 接收泛型参数

const update = ()=>{
    color!.value = 'yellow';// 非空断言
}
</script>

<template>
    <h1>孙子级别的组件</h1>
    <button @click="update">更改颜色</button>
    <div class="box"></div>

    <hr />
</template>

<style lang="scss" scoped>
.box {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>
