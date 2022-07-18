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
    },
    {
      path: '/access/list',
      // name:'',
      title: '权限管理',
      icon: 'connection',
      component: () => import('../../views/manager/access.vue')
    },
    {
      path: '/role/list',
      // name:'',
      title: '角色管理',
      icon: 'histogram',
      component: () => import('../../views/manager/role.vue')
    }
  ]
}
