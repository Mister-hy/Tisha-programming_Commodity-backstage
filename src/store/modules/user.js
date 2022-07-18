import userApi from '@/api/userApi'
import { setItem, getItem, removeItem } from '@/utils/storage'
export default {
  // 开启命名空间
  namespaced: true,
  state: {
    token: getItem('token') || [],
    userinfo: getItem('userinfo') || []
  },
  mutations: {
    SET_LOGIN(state, token) {
      state.token = token
      // console.log(token)
      // 将token存到vuex
      setItem('token', token)
      return token
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
      console.log(state.userInfo)
      // 将用户信息存到vuex
      setItem('userInfo', userInfo)
      return userInfo
    }
  },
  actions: {
    async login({ commit }, params) {
      const res = await userApi.login(params)
      // console.log(res)
      commit('SET_LOGIN', res.data.data.token)
    },
    async userInfo({ commit }, params) {
      const res = params
      commit('SET_USERINFO', res)
    },
    async logout({ commit }) {
      await userApi.logout()
      commit('SET_LOGIN', '')
      commit('SET_USERINFO', '')
      removeItem('token')
      return true
    }
  }
}
