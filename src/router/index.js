import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetings',
    name: 'Meetings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Meetings.vue')
  },
  {
    path: '/history-main-screen',
    name: 'HistoryMainScreen',
    component: () => import('../views/HistoryMainScreen.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/Notifications.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
