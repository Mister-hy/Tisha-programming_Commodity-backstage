import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/category/list',
  // name:'',
  meta: {
    title: '商品管理',
    icon: 'shopping-bag'
  },
  children: [
    {
      path: '/category/list',
      // name:'',
      title: '分类管理',
      icon: 'menu',
      component: () => import('../../views/goods/category.vue')
    }
  ]
}
