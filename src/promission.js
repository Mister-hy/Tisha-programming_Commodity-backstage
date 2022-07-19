import router from './router'
import store from './store'
// import { getNav } from "./api/nav.js";
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  // const userInfo = store.getters.userInfo
  if (to.path === '/login' && token) {
    return next(from.path)
  }
  if (to.path !== '/login' && !token) {
    return next('/login')
  }
  // if (!userInfo) {
  //   const res = await getNav();

  //   store.commit("user/setQx", res.authoritys);
  //   const data = store.dispatch("menus/filterMenus", res.authoritys);
  //   console.log(data, "data");
  //   return next(to.path);
  // }
  next()
})
