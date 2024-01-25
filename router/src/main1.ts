import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './routeProtect/App.vue'
import router from './routeProtect/route'

createApp(App).use(router).use(ElementPlus).mount('#app')
