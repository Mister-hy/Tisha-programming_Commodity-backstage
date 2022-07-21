import Vue from 'vue'
import VueRouter from 'vue-router'
// import access from './modules/access'
// import category from './modules/category'
// import coupon from './modules/coupon'
import level from './modules/level'
import manager from './modules/manager'
// import role from './modules/role'
// import skus from './modules/skus'
import user from './modules/user'
import panel from './modules/panel'
Vue.use(VueRouter)

const publicRoutes = [
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
      import(/* webpackChunkName: "about" */ '../layout/index.vue'),
    children: [
      {
        path: '/home-filled',
        name: 'home-filled',
        component: () => import('../publicRouter/panel/controlbooth.vue')
      },
      {
        path: '/shopping-cart-full',
        name: 'shopping-cart-full',
        component: () => import('../publicRouter/goods/goods.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('../publicRouter/goods/category.vue')
      },
      {
        path: '/aim',
        name: 'skus',
        component: () => import('../publicRouter/goods/skus.vue')
      },
      {
        path: '/postcard',
        name: 'postcard',
        component: () => import('../publicRouter/goods/coupon.vue')
      }
    ]
  }
]
const privateRouter = [
  // access,
  // category,
  // coupon,
  level,
  manager,
  // role,
  // skus,
  user,
  panel
]
const router = new VueRouter({
  routes: [...publicRoutes, ...privateRouter]
})

export default router
