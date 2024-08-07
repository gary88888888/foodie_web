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
      path: '/mqtt',
      name: 'mqtt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MqttPage.vue')
    },
    {
      path: '/device/:mac_address/date/:date/food_order/:order',
      name: 'foodOrderInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FoodOrderInfo.vue')
    },
    {
      path: '/device/:mac_address/date/:date',
      name: 'getData',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GetData.vue')
    },
    {
      path: '/device',
      name: 'device',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GetDevice.vue')
    },
    {
      path: '/device/:mac_address',
      name: 'device_mac',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DeviceData.vue')
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonalInfo.vue')
    },
    
  ]
})

export default router
