import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/goods/list',
  // name:'',
  meta: {
    title: '商品管理',
    icon: 'shopping-bag'
  },
  children: [
    {
      path: '/goods/list',
      // name:'',
      title: '商品管理',
      icon: 'shopping-bag',
      component: () => import('../../views/goods/goods.vue')
    },
    {
      path: '/category/list',
      // name:'',
      title: '分类管理',
      icon: 'menu',
      component: () => import('../../views/goods/category.vue')
    },
    {
      path: '/skus/list',
      // name:'',
      title: '规格管理',
      icon: 'aim',
      component: () => import('../../views/goods/skus.vue')
    },
    {
      path: '/coupon/list',
      // name:'',
      title: '优惠券管理',
      icon: 'postcard',
      component: () => import('../../views/goods/coupon.vue')
    }
  ]
}
