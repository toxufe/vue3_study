<script setup lang="ts">

import {ref} from 'vue';

interface Tree {
    id: number;
    name: string;
    checked: false,
    children: Tree[];
}

const dataArray = ref<Tree[]>([
    {
        id: 1,
        name: '1',
        checked: false,
        children: [
            {
                id: 2,
                name: '1-1',
                checked: false,
                children: [
                    {
                        id: 3,
                        name: '1-1-1',
                        checked: false,
                        children: []
                    },
                    {
                        id: 4,
                        name: '1-1-2',
                        checked: false,
                        children: [
                            {
                                id: 9,
                                name: '1-1-2-1',
                                checked: false,
                                children: []
                            },
                            {
                                id: 10,
                                name: '1-1-2-2',
                                checked: false,
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: '1-2',
                checked: false,
                children: []
            }
        ]
    },
    {
        id: 6,
        name: '2',
        checked: false,
        children: [
            {
                id: 7,
                name: '2-1',
                checked: false,
                children: []
            },
            {
                id: 8,
                name: '2-2',
                checked: false,
                children: []
            }
        ]
    }
]);


</script>

<template>

    <h1>递归组件使用 及 全局组件</h1>
    <div>
        <!-- 全局组件 -->
        <Tree :list="dataArray"></Tree>
    </div>
</template>

<style scoped lang="scss"></style>
