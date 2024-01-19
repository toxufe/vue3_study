import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitetsx from './plugins/index'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { PostCssPxToViewport } from './plugins/postcss-px-to-viewport'
import unoCss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'
import { Plugin as importToCDN } from "vite-plugin-cdn-import"

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  console.log('mode', loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // xiaoman- 开头的标签都是自定义标签 不进行编译  组件文件命名name.ce.vue
            isCustomElement: tag => tag.startsWith('xiaoman-')
          }
        }
      }),
      vueJsx(),
      AutoImport({
        imports: ['vue'],
      }),
      // unoCss({
      //   presets: [presetIcons(), presetAttributify(), presetUno()],
      //   rules: [
      //     [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
      //     ['red', { color: 'red' }],
      //     ['f40', { "font-size": '40px' }],
      //   ],
      //   shortcuts: {
      //     cike: ['red']
      //   }
      // }),
      importToCDN({
        modules: [
          {
            name: 'vue',
            var: 'Vue',
            path: `https://cdn.staticfile.org/vue/3.2.45/vue.runtime.global.prod.min.js`,
          },
          {

            name: 'element-plus',
            var: 'ElementPlus',
            path: `https://cdn.staticfile.org/element-plus/2.2.28/index.full.min.js`,
            css: 'https://cdn.staticfile.org/element-plus/2.2.28/index.min.css'
          },
        ]
      }),
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
