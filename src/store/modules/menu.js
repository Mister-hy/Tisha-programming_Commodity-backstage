export default {
  namespaced: true,
  state: {
    // 折叠
    collapse: false
  },
  mutations: {
    SET_COllAPSE(state) {
      state.collapse = !state.collapse
    }
  },
  actions: {
    setCollapse({ commit }) {
      commit('SET_COllAPSE')
    }
  }
}
