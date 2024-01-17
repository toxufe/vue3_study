// postcss 的插件 Vite内置了 postcss 无需安装

import { Plugin } from "postcss";

const Options = {
    viewportwidth:375
}
type Opitons =  {
    viewportwidth?:number
}
export  const PostCssPxToViewport = (options:Opitons = Options):Plugin => {
    const opt = Object.assign({},Options,options);
    return {
        postcssPlugin: 'postcss-px-to-viewport',
        // 钩子函数
        Declaration(node) {
            // 有些属性不需要转换 可以写成 xm
            if(node.value.includes('px')){
                const num = parseFloat(node.value);
                node.value = `${((num / opt.viewportwidth) * 100).toFixed(2)}vw`;
            }
        }
    }
}