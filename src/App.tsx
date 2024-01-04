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

import { defineComponent } from "vue";

interface Props {
    name: string;
}
export default defineComponent({
    props: {
        name: {
            type: String,
        },
    },
    emits: ["on-click"],
    setup() {
        const data = [
            { name: "zs", age: 18 },
            { name: "ls", age: 19 },
            { name: "ww", age: 20 },
        ];
        return (props:Props) => (
            <>
                <div>props:{props.name}</div>
                {data.map((item) => {
                    return <div name={item.name}>{item.name}</div>;
                })}
            </>
        );
    },
});
