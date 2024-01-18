<template>
    <h1>32.Vite CDN方式引入vue等</h1>
    <!-- 
        npm install vite-plugin-cdn-import

        vite.config.ts
        import {Plugin as importToCDN} from "vite-plugin-cdn-import"

        return defineConfig({
            plugins: [
                vue(),
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
                })
            ]
        })

     -->
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped></style>
