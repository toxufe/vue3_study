import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/routeProtect/Login.vue')
    },
    {
        path: '/home',
        component: () => import('@/routeProtect/Home.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router