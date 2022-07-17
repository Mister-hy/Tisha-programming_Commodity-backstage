import Layout from '../../layout'
export default {
  path: '/',
  component: Layout,
  redirect: '/role/list',
  // name:'',
  meta: {
    title: '管理员管理',
    icon: 'management'
  },
  children: [
    {
      path: '/role/list',
      // name:'',
      title: '角色管理',
      icon: 'histogram',
      component: () => import('../../views/manager/role.vue')
    }
  ]
}
