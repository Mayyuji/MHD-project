module.exports = {
  devServer: {
    proxy: {
      // key: value
      //  key - 前缀  /migu
      // value - 跟 http-proxy-middleware 相同的一个配置
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
