<template>
    <h1>兄弟组件传参 方法一</h1>

    <A @changeFlag="updateFlag"></A>
    <B :flag="flag"></B>


    <hr>

    <h1>兄弟组件传参 方法二 发布订阅模式</h1>
    
    
</template>
<script setup lang="ts">
import { ref } from "vue";
import A from "./components/lesson8/A.vue";
import B from "./components/lesson8/B.vue";
let flag = ref(false);

const updateFlag = (flagx:boolean)=>{
    flag.value = flagx;
}
</script>
<style scoped lang="scss">

</style>
