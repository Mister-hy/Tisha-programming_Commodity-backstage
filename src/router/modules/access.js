import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/access/list',
  // name:'',
  meta: {
    title: '管理员管理',
    icon: 'management'
  },
  children: [
    {
      path: '/access/list',
      // name:'',
      title: '权限管理',
      icon: 'connection',
      component: () => import('../../views/manager/access.vue')
    }
  ]
}
