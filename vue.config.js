module.exports = {
  css: {
    loaderOptions: {
      css: {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  }
}