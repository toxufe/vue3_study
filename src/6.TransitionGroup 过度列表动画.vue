<template>
    <h1>transition-group 为列表添加动画</h1>
    <button @click="add">添加</button>
    <button @click="pop">删除</button>
    <div class="wrap">
        <TransitionGroup enter-active-class="animate__animated  animate__bounce" leave-active-class="animate__animated animate__hinge">
            <div class="item" :key="index" v-for="(item, index) in list">{{ item }}</div>
        </TransitionGroup>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import "animate.css";
const list = reactive<number[]>([1, 2, 3, 4, 5, 6, 7]);
const add = () => {
    list.push(list.length + 1);
};

const pop = () => {
    list.pop();
};
</script>
<style scoped lang="scss">
.wrap {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;
    font-size: 40px;
    .item {
        margin: 10px;
    }
}
</style>
