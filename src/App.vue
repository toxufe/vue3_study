<template>
    <h1>v-model 知识点 父组件</h1>

    <!-- v-model vue2 value vue3  -->
    <!-- vue3 中支持绑定多个v-model -->
    <!-- v-model 的修饰符 v-model:name.isbt nameModifiers?:{
        isbt
    }  接受规范 -->

    <div>Flat:{{ flag }}</div>
    <div>Name: {{name}}</div>

    <button @click="flag=!flag">更改啊</button>

    <hr />

    <h2>子组件</h2>
    <A v-model:name.isbt="name" v-model="flag"></A>
</template>
<script setup lang="ts">
import A from "@/tsx/A";
let flag = ref<boolean>(false);
let name = ref<string>("张三");
</script>
<style scoped lang="scss"></style>
