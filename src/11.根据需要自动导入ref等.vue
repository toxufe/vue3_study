<template>
    

    <!-- 
        按需自动导入 Vite、Webpack、Rspack、Rollup 和 esbuild 的 API。
        具有 TypeScript 支持。
        https://github.com/unplugin/unplugin-auto-import

        根据需要自动导入 Vite，Webpack，Rspack，Rollup 和 esbuild API。
     -->

     <button @click="flag=!flag">切换Flag</button>
     <div>{{flag}}</div>
</template>
<script setup lang="ts">
    let flag = ref(false);
</script>
<style scoped lang="scss"></style>
