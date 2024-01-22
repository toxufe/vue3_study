<template>
    <h1>Pinia 快乐的小菠萝 修改state</h1>

    <!-- npm install pinia -S -->

    <div>
        pinia:{{ Test.current }}---{{ Test.name }}

        <button @click="change()">change</button>
    </div>
</template>
<script setup lang="ts">
import { useTestStore } from "./store";
const Test = useTestStore();
// 修改state的值 五种方式
// 1. Test.current = 10; Test.name = '小菠萝'
// 2. Test.$patch({
//         current: 10,
//         name: '小菠萝'
//     })
//
// 3. Test.$patch((state)=>{
//         if(state.current === 1){
//             state.current = 20;
//             state.name = '小菠萝';
//         }else{
//             state.current = 1;
//             state.name = '小菠萝1';
//         }
//     });

// 4.Test.$state = {
//         current: 10,
//         name: '小菠萝'
//     }

// 5 Test.setCurrent(); actions 函数

const change = () => {
   
};
</script>

<style lang="scss" scoped></style>
