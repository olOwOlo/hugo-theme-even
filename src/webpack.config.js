const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: `even.min.css`
})

module.exports = {
  devtool: 'source-map',
  entry: {
    even: './js/main.js'
  },
  output: {
    path: path.join(__dirname, '../static/dist'),
    filename: `[name].min.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader', options: {minimize: true, sourceMap: true}
          }, {
            loader: 'postcss-loader', options: {sourceMap: true}
          }, {
            loader: 'sass-loader', options: {sourceMap: true}
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /iconfont\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ['file-loader?name=[path][name].[ext]?hash=[hash:7]']
      },
      {
        test: /apple-chancery-webfont\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ['file-loader?name=[path][name].[ext]']
      }
    ]
  },
  plugins: [
    extractSass,
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
}
