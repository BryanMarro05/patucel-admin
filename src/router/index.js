import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/dashboard/Dashboard.vue'

import ProductsList from '../views/products/ProductsList.vue'

import Login from '../views/auth/Login.vue'

import { useAuthStore } from '../stores/authStore.js'

const routes = [
  {
    path: '/login',
    component: Login,
  },

  {
    path: '/',
    redirect: '/dashboard',
  },

  {
    path: '/dashboard',

    component: Dashboard,

    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/products',

    component: ProductsList,

    meta: {
      requiresAuth: true,

      roles: ['admin', 'seller'],
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.authenticated) {
    return '/login'
  }

  if (
    to.meta.roles &&
    !to.meta.roles.includes(auth.user?.role)
  ) {
    return '/dashboard'
  }
})

export default router