<template>
    <h1>Pinia 快乐的小菠萝 插件</h1>

    <!-- npm install pinia -S -->

    <div>
        orgin:{{ Test.user }}

        <hr />

        name : {{ Test.name }}

        <hr />

        getter:{{Test.newName}}

        <hr />

        base:{{Base.base}}
        <hr>

        <button @click="change()">change</button>
        <button @click="reset()">reset</button>

        <button @click="changeb()">changeb</button>
    </div>
</template>
<script setup lang="ts">
import { useTestStore,useBaseStore} from "./store";
import { storeToRefs } from "pinia";
const Test = useTestStore();
const Base = useBaseStore();

const change = () => {
    // Test.setUser();
    Test.getUser();
};

const changeb = ()=>{
    Base.base++;
}

const reset = ()=>{
    Test.$reset();
}
Test.$subscribe((args,state)=>{
    console.log("---",args)
    console.log("---",state)
});
</script>

<style lang="scss" scoped></style>
