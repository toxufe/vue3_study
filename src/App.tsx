// 1. 直接导出一个渲染函数
// export default function () {
//     return (<div>Hello World!!!</div>);
// }

// 2. options api
// import {defineComponent} from 'vue'

// export default defineComponent({

//     data() {
//         return {
//             age:18
//         }
//     },
//     render() {
//         return <div>{this.age}</div>
//     }
// })

// 3. setup 函数模式
/**
 * 变量使用单好括号包裹
 */

import "@/assets/test.scss";

// 渲染函数 + 插槽
const A = (_, { slots }) => (
    <>
        <h1> 渲染函数 + 插槽</h1>
        <div>{slots.default ? slots.default() : "<div>没有设置默认插槽，我才显示!!!</div>"}</div>
        <div>{slots.foo?.()}</div>
    </>
);

import { defineComponent, ref } from "vue";

interface Props {
    name?: string;
}
export default defineComponent({
    props: {
        name: {
            type: String,
        },
    },
    emits: ["on-click"],
    setup(props: Props, { emit }) {
        const data = [
            { name: "zs", age: 18 },
            { name: "ls", age: 19 },
            { name: "ww", age: 20 },
        ];
        const fns = (item) => {
            // console.log("触发了...",item);
            emit("on-click", item);
        };

        const slots = {
            default: () => <div style="color:red;">我是默认插槽1111</div>,
            foo: () => (
                <>
                    <h1 class="xxx">我是foo插槽</h1>
                </>
            ),
        };
        const name = ref<string>("");
        return () => (
            <>
                <input name="name" v-model={name.value} type="text" />
                <div class="xxx">{name.value}</div>
                <hr />
                <A v-slots={slots}></A>
                <hr />
                <div>props:{props?.name}</div>
                <hr />
                {data.map((item) => {
                    return (
                        <div onClick={() => fns(item)} name={item.name}>
                            {item.name}
                        </div>
                    );
                })}
                <hr />
            </>
        );
    },
});
