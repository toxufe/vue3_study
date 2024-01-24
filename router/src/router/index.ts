import {  createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import type {  RouteRecordRaw} from 'vue-router'


const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// createWebHashHistory 左右箭头原理
// window.addEventListener('hashchange',(e)=>{
//     console.log(e)
//     window.location.hash = '/about';
// });

// createWebHistory 左右箭头原理
// window.addEventListener('popstate',(e)=>{
//     console.log(e)
//     // history.pushState(null,'','/about');// 需要刷新页面才能生效
// });

export default router