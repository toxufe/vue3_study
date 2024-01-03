<script setup lang="ts">
import { ref } from "vue";
import Bus from "@/Bus";

let flag = ref<boolean>(false);

const emits = defineEmits(["changeFlag"]);
const passparams = () => {
    flag.value = !flag.value;
    Bus.emit("changeFlag", flag.value);
};
</script>

<template>
    <h1>我是A组件</h1>
    <button @click="passparams">传递参数</button>
    <hr />
</template>

<style lang="scss" scoped></style>
