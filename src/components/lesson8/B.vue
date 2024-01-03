<script setup lang="ts">
import {ref} from "vue";
import Bus from '@/Bus';

// type props = {
//     flag: boolean;
// };

// defineProps<props>();

let flag = ref(false);
Bus.on("changeFlag",(flagx)=>{
    console.log("---------------",flagx);
    flag.value = flagx;
})
</script>

<template>
    <h1>我是B组件</h1>
    <div class="box">
        {{flag}}
    </div>
    <hr>
</template>

<style lang="scss" scoped>
    .box {
        width: 200px;
        height: 200px;
        background-color: #f40;
        color:#fff;
        font-size: 40px;
    }
</style>
