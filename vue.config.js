const path = require("path");

// TODO : 
// 공통 프로퍼티에서 가져오도록 수정
const apiDomain = 'http://localhost:8080';

module.exports = {
  outputDir: path.resolve(__dirname, "./testDist"),

  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    proxy: {
      '/api/*': { 
        target: apiDomain,
        pathRewrite: { "^/api": "/" },
        changeOrigin: true,
      }, 
    },
  },
}
