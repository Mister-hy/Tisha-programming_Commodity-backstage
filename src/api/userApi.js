import request from '../utils/request'

/**
 * 登录接口
 * @param data
 * @returns {AxiosPromise}
 */
const login = (data) => {
  return request({
    url: `/admin/login?username=${data.username}&password=${data.password}`,
    method: 'POST',
    data
  })
}
/**
 * 路由接口
 * @param data
 * @returns {AxiosPromise}
 */
const router = (params) => {
  return request({
    url: `/admin/getinfo?token=${params.token}`,
    method: 'POST',
    params
  })
}
/**
 * 获取用户信息接口
 * @returns {AxiosPromise}
 */
const getUserInfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
/**
 * 退出登录接口
 * @returns {AxiosPromise}
 */
const logout = () => {
  return request({
    url: '/admin/logout',
    method: 'POST'
  })
}
/**
 * 支付订单
 * @returns {AxiosPromise}
 */
const order = () => {
  return request({
    url: '/admin/statistics1',
    method: 'GET'
  })
}
export default {
  login,
  router,
  getUserInfo,
  logout,
  order
}
