import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../layout/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
