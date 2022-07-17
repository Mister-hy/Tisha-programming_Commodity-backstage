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
export default {
  login,
  router
}
