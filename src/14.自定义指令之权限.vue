<template>
    <h1>自定义指令 指令简写</h1>
    <div class="btns">
        <button v-has-show="'shop:create'">创建</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:delete'">删除</button>
    </div>

    <!-- 
        useId : 页面权限 : 权限内容
     -->
</template>
<script setup lang="ts">
import type { Directive } from "vue";
localStorage.setItem("userId", "12");

const permission = [
    "12:shop:create",
    // '12:shop:edit',
    // '12:shop:delete'
];
let userId = localStorage.getItem("userId") as string;
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(`${userId}:${binding.value}`)) {
        el.style.display = "none";
    }
};
</script>
<style scoped lang="scss">
.btns {
    button {
        padding: 10px 20px;
        margin: 20px;
    }
}
</style>
