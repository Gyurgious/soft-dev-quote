import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/fuel',
      name: 'fuel',
      component: () => import('../views/FuelQuote.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },

    {
      path: '/profileManage',
      name: 'profilemanage',
      component: () => import('../views/profileManage.vue')
    }


  ]
})

export default router
