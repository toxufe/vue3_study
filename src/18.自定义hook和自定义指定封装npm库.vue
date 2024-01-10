<template>
    <h1>自定义hook和自定义指定 封装npm库</h1>
    <!-- <div v-resize="xxxx" class="div"></div> -->
</template>
<script setup lang="ts">
import useDark from 'v-usedark-fly';
import { onMounted } from "vue";


onMounted(() => {
    useDark()
});
// import { onMounted } from "vue";
// import useResize from "v-resize-fly";

// onMounted(() => {
//     useResize(document.querySelector(".div") as HTMLElement,(size:any)=>{
//         console.log(size);
//     })
// });
// const xxxx = (size:any) => {
//     console.log("-------",size);
// };
</script>
<style lang="scss" scoped>
.div {
    width: 200px;
    height: 200px;
    border: 3px solid #ccc;
    resize: both;
    overflow: hidden;
}

body {
    background: #f00;
    color: yellow;
}
</style>
