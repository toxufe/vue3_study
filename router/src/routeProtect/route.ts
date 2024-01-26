import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/routeProtect/Login.vue'),
        meta:{
            title:"我是登录页面"
        }
    },
    {
        path: '/home',
        component: () => import('@/routeProtect/Home.vue'),
        meta:{
            title:"我是Home页面"
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router