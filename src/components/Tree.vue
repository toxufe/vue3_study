<script setup lang="ts">
import {} from "vue"

interface Tree {
    id: number;
    name: string;
    checked: false,
    children: Tree[];
}


defineProps<{
    list: Tree[];
}>();

const tab = (item:Tree)=>{
    console.log(item.name);
}
</script>

<script lang="ts">
export default {
    name:"Treecustom",
}
</script>

<template>
    <div class="tree">
      <div @click.stop="tab(item)" class="tree-item" v-for="item in list" :key="item.id">
        <div class="tree-item__name"> <input v-model="item.checked" type="checkbox"> {{ item.name }}</div>
        <Treecustom :list="item.children" v-if="item.children.length > 0" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.tree-item {
    margin-left: 30px;
    font-size: 20px;
}
</style>
