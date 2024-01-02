<script setup lang="ts">
import { ref } from "vue";
import "animate.css";
import gsap from "gsap";


let flag = ref(true);
const beforeEnter = (el: Element) => {
    gsap.set(el,{
        width:0,
        height:0
    });
};
const enter = (el: Element,done:gsap.Callback) => {
    gsap.to(el,{
        width:200,
        height:200,
        onComplete:done
    });
};
const leave = (el: Element,done:gsap.Callback) => {
    gsap.to(el,{
        width:0,
        height:0,
        onComplete:done
    });
};




</script>

<template>
    <h3>transition生命周期</h3>
    <button @click="flag = !flag">切换</button>
    <Transition 
    @before-enter="beforeEnter" 
    @enter="enter" 
    @leave="leave"
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

</style>
