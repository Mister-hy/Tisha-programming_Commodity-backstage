import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/',
  // name:'',
  meta: {
    title: '后台面板',
    icon: 'shopping-bag'
  },
  children: [
    {
      path: '/',
      // name:'',
      title: '控制台',
      icon: 'aim',
      component: () => import('../../views/panel/controlbooth.vue')
    }
  ]
}
