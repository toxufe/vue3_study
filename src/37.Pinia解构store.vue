<template>
    <h1>Pinia 快乐的小菠萝 解构store</h1>

    <!-- npm install pinia -S -->

    <div>
        orgin:{{ Test.current }}---{{ Test.name }}

        <hr />

        current:{{ current }}---{{ name }}

        <button @click="change()">change</button>
    </div>
</template>
<script setup lang="ts">
import { useTestStore } from "./store";
import {storeToRefs} from 'pinia'
const Test = useTestStore();


// 不具有响应式
const { current, name } = storeToRefs(Test);

const change = () => {
    current.value ++;
    name.value = Math.random() + '';
};
</script>

<style lang="scss" scoped></style>
