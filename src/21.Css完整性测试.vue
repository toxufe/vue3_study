<template>
    <h1>css 完成新特性</h1>

    <!-- <div :class="$style.div">

    </div> -->


    <!-- <div :class="xxx.div">
        你好世界

</div> -->

</template>
<script setup lang="ts">
// import {ref} from 'vue'
// const style = ref('red');
// const style01 = ref({
//     color :'red'
// })
</script>
<style module="xxx">
    .div {
        color: red;
    }
</style>
<style lang="scss" scoped>
// // 插槽选择器 
// :slotted(.red){
//     color: red;
// }
// // 全局选择器
// :global(.red){
//     color: pink;
// }
// // 动态css
// .red {
//     color: v-bind(style);
// }

// .red {
//     color: v-bind('style01.color');
// }
</style>


