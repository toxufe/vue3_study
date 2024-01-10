<template>
    <h1>vue3 插件开发 Loading</h1>
    <!-- 目录结构
        Loading
            - index.ts
                返回对象或函数 如果返回的是对象，对象中必须有install方法
            - index.vue
    -->
    <hr>

</template>
<script setup lang="ts">
import { getCurrentInstance,onMounted } from "vue";
const app = getCurrentInstance();

onMounted(()=>{
    app?.proxy?.$loading.show();
    setTimeout(()=>{
        app?.proxy?.$loading.hide();
    },2000)
});
</script>
<style lang="scss" scoped></style>
