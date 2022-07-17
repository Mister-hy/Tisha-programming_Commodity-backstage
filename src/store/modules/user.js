import userApi from '@/api/userApi'
import { setItem, getItem } from '@/utils/storage'
export default {
  // 开启命名空间
  namespaced: true,
  state: {
    token: getItem('token') || []
  },
  mutations: {
    SET_LOGIN(state, token) {
      state.token = token
      // console.log(token)
      setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, params) {
      const res = await userApi.login(params)
      // console.log(res)
      commit('SET_LOGIN', res.data.data.token)
    }
  }
}
