const path = require("path");
 
module.exports = {
  outputDir: path.resolve(__dirname, "./testDist"),

  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    proxy: {
      '/test1': { 
        target: 'http://localhost:8080', 
        changeOrigin: true,
      }, 
    },
  },
}
