import { createApp,createVNode,render  } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './routeProtect/App.vue'
import router from './routeProtect/route'



import loadingBar from './routeProtect/LoadingBar.vue'
const Vnode = createVNode(loadingBar)
render(Vnode, document.body)


const whiteList = ['/'];
router.beforeEach((to, from, next) => {
    if(whiteList.includes(to.path) || localStorage.getItem('token')){
        next();
    }else{
        next('/');
    } 


    Vnode.component?.exposed?.startLoading()
})

router.afterEach((to, from) => {
    Vnode.component?.exposed?.endLoading();
})

createApp(App).use(router).use(ElementPlus).mount('#app')
