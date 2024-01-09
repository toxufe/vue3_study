<template>
    <div class="box">
        <div class="header"></div>
        <div>内容</div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    const boxElement = document.querySelector(".box") as HTMLElement;
    const moveElement = boxElement.firstChild as HTMLDivElement;
    const mouseDown = (e:MouseEvent) => {
        let X = e.clientX - boxElement.offsetLeft;
        let Y = e.clientY - boxElement.offsetTop;
        const mouseMove = (e:MouseEvent) => {
            boxElement.style.left = e.clientX - X  + "px";
            boxElement.style.top = e.clientY - Y + "px";
        };
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", mouseMove);
        });
    };
    moveElement.addEventListener("mousedown", mouseDown);
});
</script>
<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    border: 3px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    .header {
        height: 30px;
        background-color: #000;
    }
}
</style>
