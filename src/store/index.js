import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import menu from './modules/menu'
import loading from './modules/loding'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    menu,
    loading
  }
})
