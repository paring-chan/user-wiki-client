module.exports = {
  "devServer": {
    "disableHostCheck": true,
    proxy: {
      '/api': {
        target: 'http://home.minibox.pw',
        changeOrigin: true
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}