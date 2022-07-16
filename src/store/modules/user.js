import userApi from '@/api/userApi'
export default {
  // 开启命名空间
  namespaced: true,
  state: {},
  getters: {},
  mutations: {
    login({ commit }, params) {
      const res = userApi.login(params)
      console.log(res)
    }
  },
  actions: {}
}
