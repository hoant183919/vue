import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Update from '@/components/Update.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/update/:id',
        component: Update
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router