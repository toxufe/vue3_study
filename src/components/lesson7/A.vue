<script setup lang="ts">
import { inject, type Ref } from "vue";
import B from "./B.vue";

let color = inject("color");
</script>

<template>
    <h1>父亲级别的组件</h1>
    <div class="box"></div>

    <hr />
    <B></B>
</template>

<style lang="scss" scoped>
.box {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>
