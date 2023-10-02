import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from '@/pages/Home.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/pages/Test.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router