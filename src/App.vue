<script setup lang="ts">
import { ref } from "vue";
import "animate.css";

let flag = ref(true);
</script>

<template>
    <button @click="flag = !flag">切换</button>
    <Transition :duration="1000"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-if="flag" class="box"></div>
    </Transition>



    <div style="height: 40px;"></div>

    <!-- <div class="box animate__animated animate__bounce animate__slow animate__infinite">Example</div> -->
</template>

<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    background-color: red;
    color: #FFF;
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
