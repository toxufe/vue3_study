<script setup lang="ts">
import { ref } from "vue";
import "animate.css";

let flag = ref(true);
const beforeEnter = (el: Element) => {
    console.log("显示：动画之前", el);
};
const enter = (el: Element,done:Function) => {
    
    // setTimeout(() => {
    //     console.log("显示：动画曲线", el);
       
    // }, 3000);

    done();
};
const afterEnter = (el: Element) => {
    console.log("显示：动画完成", el);
};
const enterCancelled = (el: Element) => {
    // console.log("显示：动画被打断", el);
};

const beforeLeave = (el: Element) => {
    console.log("隐藏：动画之前", el);
};
const leave = (el: Element,done:Function) => {
    setTimeout(() => {
        console.log("隐藏：动画曲线", el);
        done();
    }, 5000);
};
const afterLeave = (el: Element) => {
    console.log("隐藏：动画完成", el);
};
const leaveCancelled = (el: Element) => {
    console.log("隐藏：动画被打断", el);
};




</script>

<template>
    <h3>transition生命周期</h3>
    <button @click="flag = !flag">切换</button>
    <Transition 
    @before-enter="beforeEnter" 
    @enter="enter" 
    @after-enter="afterEnter" 
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
    >
        <div v-if="flag" class="box"></div>
    </Transition>

    <hr />

    <h3>transiton动画</h3>
    <button @click="flag = !flag">切换</button>
    <Transition
        :duration="1000"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-if="flag" class="box"></div>
    </Transition>

    <div style="height: 40px"></div>
    <Transition
        :duration="{ enter: 50, leave: 2000 }"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-if="flag" class="box"></div>
    </Transition>

    <div style="height: 40px"></div>

    <div class="box animate__animated animate__bounce animate__slow animate__repeat-2">Example</div>
</template>

<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    background-color: red;
    color: #fff;
}

// .box {
//     animation: bounce; /* referring directly to the animation's @keyframe declaration */
//     animation-duration: 2s; /* don't forget to set a duration! */
// }

// .fade-enter-from{
//     width: 0;
//     height: 0;
// }
// .fade-enter-active{
//     transition: all 1.5s ease;
// }
// .fade-enter-to{
//     width: 200px;
//     height: 200px;
// }
// .fade-enter-from{
//     width: 200px;
//     height: 200px;
// }
// .fade-leave-active{
//     transition: all 1.5s ease;
// }
// .fade-leave-to{
//     width: 0;
//     height: 0;
// }
</style>
