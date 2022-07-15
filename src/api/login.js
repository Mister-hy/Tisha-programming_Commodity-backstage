import request from '../utils/request'

/**
 * 登录接口
 * @param data
 * @returns {AxiosPromise}
 */
const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}

export default {
  login
}
