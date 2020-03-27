module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
