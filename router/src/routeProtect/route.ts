import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/routeProtect/Login.vue'),
        meta:{
            title:"我是登录页面",
            transition:'animate__fadeInUp'
        }
    },
    {
        path: '/home',
        component: () => import('@/routeProtect/Home.vue'),
        meta:{
            title:"我是Home页面",
            transition:"animate__bounceIn",
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {top:savedPosition.top ?? 0}
    }
})



export default router