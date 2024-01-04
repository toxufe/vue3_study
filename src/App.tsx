


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

import {defineComponent} from 'vue'
export default defineComponent({
    setup(){
        return ()=>{
            return (<div>hello wor222ld</div>)
        }
    }
})