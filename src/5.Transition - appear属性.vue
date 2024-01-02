<script setup lang="ts">
import { ref } from "vue";
import "animate.css";

/**
 * appear 
 * 首次渲染的时候，帮我们执行动画。
 */

let flag = ref(true);
</script>

<template>
    <h3>transition生命周期</h3>
    <button @click="flag = !flag">切换</button>
    <Transition
        appear
        appear-from-class="from"
        appear-active-class="active"
        appear-to-class="to"
    >
        <div v-if="flag" class="box"></div>
    </Transition>


    <h3 style="height: 100px;">transition动画</h3>

    <Transition
        appear
        appear-active-class="animate__animated animate__bounce"
    >
        <div v-if="flag" class="box"></div>
    </Transition>
</template>

<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    background-color: red;
    color: #fff;
}

.from {
    width: 0;
    height: 0;
}
.active {
   transition: all 2s;
}
.to {
    width: 200px;
    height: 200px;
}
</style>
