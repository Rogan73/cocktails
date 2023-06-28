import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cocktails/:id',
            name: 'coctail',
            component: () =>
                import ('@/pages/Cocktail.vue')
        },
        {
            path: '/random',
            name: 'coctailRandom',
            component: () =>
                import ('@/pages/CocktailRandom.vue')
        }
    ]
})

export default router