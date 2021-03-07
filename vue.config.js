module.exports = {
  configureWebpack:{
    resolve:{
        alias:{
          components:'@/components',
          views:'@/views',
          common:'@/common',
          assets:'@/assets',
          network:'@/network',
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/' 
}
