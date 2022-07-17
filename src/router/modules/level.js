import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/level/list',
  // name:'',
  meta: {
    title: '用户管理',
    icon: 'shopping-bag'
  },
  children: [
    {
      path: '/level/list',
      // name:'',
      title: '会员等级',
      icon: 'data-analysis',
      component: () => import('../../views/goods/coupon.vue')
    }
  ]
}
