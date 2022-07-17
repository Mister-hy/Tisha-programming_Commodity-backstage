import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/skus/list',
  // name:'',
  meta: {
    title: '商品管理',
    icon: 'shopping-bag'
  },
  children: [
    {
      path: '/skus/list',
      // name:'',
      title: '规格管理',
      icon: 'aim',
      component: () => import('../../views/goods/skus.vue')
    }
  ]
}
