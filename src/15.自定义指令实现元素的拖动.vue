<template>
    <h1>自定义指令实现元素拖动</h1>
    <div v-move class="box">
        <div class="header"></div>
        <div>内容</div>
    </div>
</template>
<script setup lang="ts">
import type { Directive, DirectiveBinding } from "vue";

const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
    let moveElement:HTMLDivElement = el.firstChild as HTMLDivElement;


    const mouseDown = (e:MouseEvent)=>{
        let X = e.clientX - el.offsetLeft;
        let Y = e.clientY - el.offsetTop;
        const moveMove = (e:MouseEvent)=>{
            el.style.left = e.clientX - X + "px";
            el.style.top = e.clientY - Y + "px";
        }
        document.addEventListener("mousemove",moveMove);
        document.addEventListener("mouseup",()=>{
            document.removeEventListener("mousemove",moveMove);
        });
    }
    moveElement.addEventListener("mousedown",mouseDown);
};
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
