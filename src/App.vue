<template>
    <h1>Vue3.3 编译宏</h1>


<!-- 

    vue 3.3 新增了  defineProps 新增了泛型的支持 用于类型推断
    generic type inference for defineProps
 -->

 <xm @getname="xxx" :name="['a','b','c']"></xm>
</template>
<script setup lang="ts">
import xm from '@/components/lession30/child.vue'
const xxx  = (name:string) => {
  console.log(name);
}
</script>

<style lang="scss" scoped>
</style>
