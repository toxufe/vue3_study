<template>
    <h1>自定义指令 图片懒加载</h1>
    <div v-for="item in arr">
        <img v-lazy="item" width="100%" height="auto" alt="" />
    </div>
</template>
<script setup lang="ts">
import type { Directive } from 'vue';
let imageList: Record<string, { default: string }> = import.meta.glob("@/assets/images/*.{png,jpg,jpeg,gif,svg}", {
    eager: true,
});
let arr = Object.values(imageList).map((item) => item.default);

const vLazy:Directive<HTMLImageElement,string> = async (el,binding)=>{
    const logo = await import ('@/assets/logo.svg')
    el.src = logo.default;
    // 可视区 InterSectionObserver
    const observer = new IntersectionObserver((entries)=>{
        if(entries[0].intersectionRatio>0){
            el.src = binding.value;
            observer.unobserve(el)
        }
    })
    observer.observe(el)
}
</script>
<style scoped lang="scss"></style>
