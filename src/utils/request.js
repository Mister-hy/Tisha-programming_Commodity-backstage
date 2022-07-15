import axios from 'axios'

// Set config defaults when creating the instance
const request = axios.create({
  // baseURL: 'http://kg.9yuecloud.com/dev-api',
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
