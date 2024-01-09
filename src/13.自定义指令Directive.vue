<template>
    <h1>自定义指令</h1>

    <!-- 
        破坏性更新
     -->

    <button @click="flag = !flag">切换</button>

    <A v-show="flag" v-move:aaa.hover="{ background: 'green' }"></A>
</template>
<script setup lang="ts">
import type { Directive, DirectiveBinding } from "vue";
import { ref } from "vue";
import A from "@/components/lesson13/A.vue";

let flag = ref<boolean>(true);

interface Dir {
    background:string
}

const vMove: Directive = {
    created() {
        console.log("v-move created");
    },
    beforeMount() {
        console.log("v-move beforeMount");
    },
    // mounted(...args: Array<any>) {
    //     console.log("v-move mounted");
    //     console.log(args);
    // },


    mounted(el: HTMLElement, binding: DirectiveBinding<Dir>) {
        console.log("v-move mounted");
        el.style.background = binding.value.background;
    },
    beforeUpdate() {
        console.log("v-move beforeUpdate");
    },
    updated() {
        console.log("v-move updated");
    },
    beforeUnmount() {
        console.log("v-move beforeUnmount");
    },
    unmounted() {
        console.log("v-move unmounted");
    },
};
</script>
<style scoped lang="scss"></style>
