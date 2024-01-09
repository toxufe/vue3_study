<template>
    <h1>自定义hook</h1>

    <!-- 
      
      1. 什么是自定义hook
         自定义hook是一个函数，其名称以use开头，函数内部可以调用其他的hook
         自定义hook的作用：复用逻辑

      实现功能，把图片地址，转成base64
   
   
   -->
    <img id="img" src="./assets/images/2.jpg" alt="" />
</template>
<script setup lang="ts">
import useBase64 from "./hooks";
useBase64({
    el: "#img",
}).then((base64) => {
    // console.log(base64.dataurl);
    document.querySelector("#img")!.src = base64.dataurl;
})
</script>
<style scoped lang="scss"></style>
