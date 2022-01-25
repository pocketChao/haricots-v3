import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        component: () => import('@/pages/home/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router