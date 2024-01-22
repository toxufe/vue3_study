<template>
    <h1>Pinia 快乐的小菠萝 actions/getters</h1>

    <!-- npm install pinia -S -->

    <div>
        orgin:{{ Test.user }}

        <hr />

        name : {{ Test.name }}

        <hr />

        getter:{{Test.newName}}

        <hr />

        <button @click="change()">change</button>
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
</script>

<style lang="scss" scoped></style>
