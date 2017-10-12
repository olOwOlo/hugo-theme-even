module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
    })
  ]
}