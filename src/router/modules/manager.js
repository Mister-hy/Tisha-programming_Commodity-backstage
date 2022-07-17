import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/manager/list',
  // name:'',
  meta: {
    title: '管理员管理',
    icon: 'management'
  },
  children: [
    {
      path: '/manager/list',
      // name:'',
      title: '管理员管理',
      icon: '"coordinate"',
      component: () => import('../../views/manager/manager.vue')
    }
  ]
}
