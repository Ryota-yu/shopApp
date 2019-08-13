import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../pages/home')
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('../pages/category')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../pages/home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('../pages/product')
      }
    ]
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('../pages/personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('../pages/search')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

Vue.use(Router)

export default new Router({
  routes
})
