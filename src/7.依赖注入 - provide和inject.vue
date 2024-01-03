<template>
    <h1>爷爷级别的组件</h1>
    <!-- 

        非空断言 
        只读的ref
        后代可以更改proivder
     -->
    <label for="red">
        <input id="red" value="red" type="radio" v-model="color">
        红色
    </label>
    <label for="yellow">
        <input id="yellow" value="yellow" type="radio" v-model="color">
        黄色
    </label>
    <label for="blue">
        <input id="blue" value="blue" type="radio" v-model="color">
        蓝色
    </label>


    <div class="box"></div>

    <hr>

    <A></A>
</template>
<script setup lang="ts">
import { provide, readonly, ref } from 'vue'
import A from '@/components/lesson7/A.vue';
// let color = ref<string>('red');
let color = ref<string>('red');
provide('color', readonly(color));
</script>
<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>
