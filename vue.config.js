/**
 * @author YangLing
 * @date 2022/7/11 09:29
 */
module.exports = {
  publicPath: './',
  devServer: {
    open: false,
    host: 'localhost',
    port: 9413,
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_CROSS_ORIGIN,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
      // '/api': {
      //   // 1 目标路径

      //   //重写路径为api
      //   target: 'http://kg.9yuecloud.com/dev-api',
      //   //2 允许跨域
      //   changOrigin: true,
      //   //3 重写路径
      //   pathRewrite: {
      //     // 将/api装换成 ''
      //     '^/api': ''
      //   }
      // }
    }
  },
  css: {
    // loaderOptions: {
    //   sass: {
    //     prependData: '@import "@/styles/common.scss";'
    //   }
    // }
  }
}
