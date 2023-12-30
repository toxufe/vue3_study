<script setup lang="ts">
import waterfallsFlow from "@/components/waterfallsFlow.vue";
// 生成一个随机颜色
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 生成包含 height 和 background 属性的对象数组
function generateRandomArray(length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomHeight = Math.floor(Math.random() * 100) + 50; // 随机生成高度在 50 到 149 之间
        const randomBackground = getRandomColor(); // 随机生成背景色

        result.push({
            height: randomHeight,
            background: randomBackground,
        });
    }
    return result;
}

// 生成包含 500 条对象的数组
const dataArray = generateRandomArray(100);
</script>

<template>
    <waterfallsFlow :list="dataArray"></waterfallsFlow>
</template>

<style scoped lang="scss"></style>
