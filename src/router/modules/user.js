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
    }
  ]
}
