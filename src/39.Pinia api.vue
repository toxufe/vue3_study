<template>
    <h1>Pinia 快乐的小菠萝 api</h1>

    <!-- npm install pinia -S -->

    <div>
        orgin:{{ Test.user }}

        <hr />

        name : {{ Test.name }}

        <hr />

        getter:{{Test.newName}}

        <hr />

        <button @click="change()">change</button>
        <button @click="reset()">reset</button>
    </div>
</template>
<script setup lang="ts">
import { useTestStore } from "./store";
import { storeToRefs } from "pinia";
const Test = useTestStore();

const change = () => {
    // Test.setUser();
    Test.getUser();
};

const reset = ()=>{
    Test.$reset();
}
Test.$subscribe((args,state)=>{
    console.log("---",args)
    console.log("---",state)
},{
    detached:true,
    deep:true,
    flush:'post'
});
Test.$onAction((args)=>{
    console.log("---",args)
    args.after(()=>{
        console.log("---",Test.user)
    })
    args.onError(()=>{
        console.log("---",Test.user)
    })
},true);// 组件销毁时，依然订阅
</script>

<style lang="scss" scoped></style>
