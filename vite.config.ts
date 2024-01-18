import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitetsx from './plugins/index'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import {PostCssPxToViewport} from './plugins/postcss-px-to-viewport'
import unoCss from 'unocss/vite'
import {presetIcons,presetAttributify,presetUno} from 'unocss'
import { log } from 'node:console'

// https://vitejs.dev/config/
export default ({mode}:any)=>{
  console.log('mode',loadEnv(mode,process.cwd()));
  
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue'],
      }),
      unoCss({
        presets:[presetIcons(),presetAttributify(),presetUno()],
        rules:[
          [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
          ['red',{color:'red'}],
          ['f40',{"font-size":'40px'}],
        ],
        shortcuts:{
          cike:['red']
        }
      })
      // vitetsx()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [
          // PostCssPxToViewport()
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/bem.scss";`
        }
      }
    }
  })
}
