<script setup lang="ts" generic="T">
import type { PropType } from "vue";

// const props = defineProps<{
//   name: T[]
// }>()

// console.log(props.name);

defineProps<{
    name: T[];
}>();

// defineProps({
//   name: Array as PropType<string[]>,
// })
// const emits = defineEmits(['getname'])
// const emit = defineEmits<{
//     getname: (name: string) => void;
// }>();

// Vue3.3的改进
const emit = defineEmits<{
    getname: [name: string];
}>();
const xxx = (name) => {
    emit("getname", name);
};

// vue 3.3 内置了 defineOptions 它里面的属性跟optionsApi 一模一样
// 常用 定义名字 小满
// defineOptions({
//     name: "xm",
// });

// defineSlots 只有声明 没有实现

defineSlots<{
  default(props:{item:T[],index:number}): void;
}>();


</script>

<template>
    <div @click="xxx(item)" v-for="item in name" class=""> <slot index="0" :item="item"></slot></div>

   
</template>

<style lang="scss" scoped></style>
