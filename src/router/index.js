import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import { ROUTES_PATHS } from '../constants'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: ROUTES_PATHS.HOME,
            name: ROUTES_PATHS.HOME,
            component: Home
        },
        {
            path: ROUTES_PATHS.COCKTAIL,
            name: ROUTES_PATHS.COCKTAIL,
            component: () =>
                import ('@/pages/Cocktail.vue')
        },
        {
            path: ROUTES_PATHS.COCKTAIL_RANDOM,
            name: ROUTES_PATHS.COCKTAIL_RANDOM,
            component: () =>
                import ('@/pages/CocktailRandom.vue')
        }
    ]
})

export default router