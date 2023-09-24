import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router