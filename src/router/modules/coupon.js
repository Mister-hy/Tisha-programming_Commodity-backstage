import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/coupon/list',
  // name:'',
  meta: {
    title: '商品管理',
    icon: 'shopping-bag'
  },
  children: [
    {
      path: '/coupon/list',
      // name:'',
      title: '优惠券管理',
      icon: 'postcard',
      component: () => import('../../views/goods/coupon.vue')
    }
  ]
}
