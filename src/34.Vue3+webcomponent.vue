<template>
    <h1>Vue3+webcomponent</h1>

    <!-- 


        vue({
        template: {
          compilerOptions: {
            // xiaoman- 开头的标签都是自定义标签 不进行编译  组件文件命名name.ce.vue
            isCustomElement: tag => tag.startsWith('xiaoman-')
          }
        }
      }),


      
     -->

    <xiaoman-btn></xiaoman-btn>
    
</template>
<script setup lang="ts">
import { defineCustomElement } from 'vue';
import customVueCe from './components/custom-vue.ce.vue';
const btn = defineCustomElement(customVueCe);
window.customElements.define('xiaoman-btn', btn);
</script>

<style lang="scss" scoped></style>
