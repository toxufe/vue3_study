<script setup lang="ts">
import { ref } from "vue";
let isshow = ref<boolean>(false);
const show = () => (isshow.value = true);
const hide = () => (isshow.value = false);

defineExpose({
    show,
    hide,
});
</script>

<template>
    <div v-if="isshow" class="loading">loading.....</div>
</template>

<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
