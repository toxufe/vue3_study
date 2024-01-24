<script setup lang="ts">
import {} from "vue";
import { useRoute,useRouter } from "vue-router";
import {data} from './list.json';
const route = useRoute();
const router = useRouter();


let item = data.find((item)=>item.id==Number(route.params.id));

</script>

<template>
    <h1><button @click="router.back()">返回</button>商品详情页面</h1>
    <hr />
    <table border="1" width="600px">
        <thead align="left">
            <tr>
                <th>id</th>
                <th>{{ route.query.id }}</th>
            </tr>

            <tr>
                <th>商品名称</th>
                <th>{{ route.query.product }}</th>
            </tr>

            <tr>
                <th>商品价格</th>
                <th>{{ route.query.price }}</th>
            </tr>
        </thead>
    </table>

    <hr />
    <table border="1" width="600px">
        <thead align="left">
            <tr>
                <th>id</th>
                <th>{{ item?.id }}</th>
            </tr>

            <tr>
                <th>商品名称</th>
                <th>{{ item?.product }}</th>
            </tr>

            <tr>
                <th>商品价格</th>
                <th>{{ item?.price }}</th>
            </tr>
        </thead>
    </table>
    
</template>

<style lang="scss" scoped></style>
