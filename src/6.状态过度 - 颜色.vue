<template>
<h1>transitiongroup 状态过度</h1>
<input v-model="nums.current" style="height: 40px; width: 200px;font-size: 30px;">
<span style="border: 1px solid #ccc;"><colorPicker v-model="nums.current" /></span>
<div style="font-size: 30px;" :style="{background:nums.animatednum}">
    {{ nums.animatednum }}
</div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { ref, reactive, computed, watch, onMounted, onUpdated, onUnmounted } from 'vue'
const nums = reactive({
    current:'#8165a0',
    animatednum:'',
})

watch(() => nums.current, (newVal, oldVal) => {
    gsap.to(nums, {
        duration: 3,
        animatednum: newVal,
    })
})
</script>
<style scoped lang="scss">

</style>
