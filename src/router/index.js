import { createRouter, createWebHistory } from 'vue-router'
import AddProduct from '../views/AddProduct.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/members',
    name: 'Members',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Members.vue')
  },{ path: '/Home', name: 'Community',
  component: Home
    }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
