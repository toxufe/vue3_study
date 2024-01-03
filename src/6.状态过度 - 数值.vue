<template>
<h1>transitiongroup 状态过度</h1>
<input v-model="nums.current" style="height: 40px; width: 200px;font-size: 30px;" step="10" type="number">
<div style="font-size: 30px;">
    {{ nums.animatednum.toFixed(0) }}
</div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { ref, reactive, computed, watch, onMounted, onUpdated, onUnmounted } from 'vue'
const nums = reactive({
    current:0,
    animatednum:0,
})

watch(() => nums.current, (newVal, oldVal) => {
    gsap.to(nums, {
        duration: 1,
        animatednum: newVal,
    })
})
</script>
<style scoped lang="scss">

</style>
