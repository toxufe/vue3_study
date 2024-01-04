import type { Plugin } from 'vite'
import * as babel from '@babel/core'
import jsx from '@vue/babel-plugin-jsx'


export default function (): Plugin {
    return {
        name: 'vite-plugin-vue-tsx',
        config(){
            return {
                esbuild:{
                    include:/\.ts$/
                }
            }
        },
        async transform(code,id){
            if(/.tsx$/.test(id)){
               console.log(code,id);
               //@ts-ignore
               const ts = await import ('@babel/plugin-transform-typescript').then(r=>r.default);
               const res = await babel.transformAsync(code,{
                    ast:true,
                    babelrc:false,
                    configFile:false,
                    plugins:[jsx,[ts,{isTSX:true,allExtensions:true}]],// 添加babel 插件
               });
               return res?.code;
            }

            return code;
        }
    }
}