<script setup lang="ts">
import {} from "vue"
import 'animate.css'



</script>

<template>
    <img src="https://static.xuehuafei.cn/i/2024/01/25/65b21e379da8b.png" alt="">
  <!-- <router-view></router-view> -->


  <router-view #default="{route,Component}">
        <transition  :enter-active-class="`animate__animated ${route.meta.transition}`">
            <component :is="Component"></component>
        </transition>
    </router-view>



</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}

// html,body,#app {
//     height: 100%;
//     overflow: hidden;
// }
</style>
