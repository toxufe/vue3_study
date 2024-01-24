<script setup lang="ts">
import {} from "vue";
import { data } from "./list.json";
import {useRouter} from 'vue-router';

const router = useRouter();

type Item = {
    id: number;
    product: string;
    price: number;
};

const toDetail = (item: Item) => {
    // router.push({ path:'/about' ,query:item});
    router.push({ name:'About' ,params:{id:item.id}});
};
</script>

<template>
    <h1>商品列表页面</h1>
    <hr>
    <table width="600px" border="1">
        <thead>
            <tr>
                <th>id</th>
                <th>产品名称</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.product }}</td>
                <td>{{ item.price }}</td>
                <td @click="toDetail(item)" align="center"><button>详情</button></td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped></style>
