import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


// const routes: Array<RouteRecordRaw> = [
//     {
//         path: '/',
//         component: () => import('../views/Footer.vue'),
//         children: [
//             {
//                 path: '',
//                 name: 'Home',
//                 component: () => import('../views/Home.vue')
//             },

//             // 动态路由参数
//             {
//                 path: '/about/:id',
//                 name: 'About',
//                 component: () => import('../views/About.vue')
//             }
//         ]
//     },

// ]
// 命名视图
// const routes: Array<RouteRecordRaw> = [ 
//     {
//         path: '/',
//         components: {
//             default: () => import('../views/Home.vue'),
//             about: () => import('../views/About.vue'),
//             footer: () => import('../views/Footer.vue')
//         }
//     }
// ];


// 命名视图和父子路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/Father.vue'),
        // redirect: '/user1',
        // redirect: {path: 'user1'},
        // redirect:(to)=>{
        //     console.log(to);
            
        //     return {
        //         path: '/user1',
        //         query:{
        //             aaa:111
        //         }
        //     };
        // },
        children:[
            {
                path:'/user1',
                components:{
                    default: () => import('../views/default.vue'),
                }
            },
            {
                path:'/user2',
                components:{
                    aaa: () => import('../views/aaa.vue'),
                    bbb: () => import('../views/bbb.vue'),
                }
            }
        ],
    }
];

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