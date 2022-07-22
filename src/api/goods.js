import request from '../utils/request'
/**
 * 规格管理
 * @returns {AxiosPromise}
 */
const skus = () => {
  return request({
    url: '/admin/skus/1',
    method: 'GET'
  })
}
/**
 * 分页第二页数据
 * @returns {AxiosPromise}
 */
const pagination = () => {
  return request({
    url: '/admin/skus/2',
    method: 'GET'
  })
}
/**
 * skus添加
 * @returns {AxiosPromise}
 */
const skusAdd = (data) => {
  return request({
    url: `/admin/skus?status=${data.status}&name=${data.name}&default=${data.default}`,
    method: 'POST',
    data
  })
}
/**
 * 单个删除
 * @returns {AxiosPromise}
 */
const deleteAll = (data) => {
  return request({
    url: `/admin/skus/delete_all?ids=${data.ids}`,
    method: 'POST',
    data
  })
}
export default {
  skus,
  pagination,
  skusAdd,
  deleteAll
}
