<template>
    <h1>函数式编程 h函数</h1>

    <!-- 

        vue3 编程风格
        template模板方式 、JSX 、 h函数

        h函数 优点：
        应为Vue单文件组件编译是需要过程，他会经过parser -> transform -> generate 而h函数直接跳过这三个阶段，所以性能上有很大的帮助。


        这个东西在Vue3使用的很少了，大家有个了解就可以了


        主要会用到h函数

        h 接收三个参数
        type 元素的类型
        propsOrChildren 数据对象, 这里主要表示(props, attrs, dom props, class 和 style)
        children 子节点

        https://blog.csdn.net/qq1195566313/article/details/125733613
     -->

    <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>操作</th>
        </tr>
        <tr v-for="item in list">
            <td>{{ item.name }}</td>
            <td>{{ item.sex }}</td>
            <td>{{ item.age }}</td>
            <td><Button type="success">编辑</Button><Button type="error">删除</Button></td>
        </tr>
    </table>
</template>
<script setup lang="ts">
import type { ComponentInternalInstance} from "vue";
import { h } from "vue";
interface Props {
    type?: "success" | "error";
}
const Button = (props: Props, ctx:ComponentInternalInstance ) => {
    return h(
        "button",
        {
            style: {
                color: props.type === "success" ? "green" : "red",
            },
            onClick: () => {
                if (props.type === "success") {
                    console.log("编辑");
                } else {
                    console.log("删除");
                }
            },
        },
        ctx.slots.default?.(),
    );
};

const list = reactive([
    {
        name: "张三",
        sex: "26",
        age: "男",
    },
    {
        name: "张三",
        sex: "26",
        age: "男",
    },
    {
        name: "张三",
        sex: "26",
        age: "男",
    },
    {
        name: "张三",
        sex: "26",
        age: "男",
    },
    {
        name: "张三",
        sex: "26",
        age: "男",
    },
]);
</script>

<style lang="scss" scoped>
button {
    padding: 10px;
}
</style>
