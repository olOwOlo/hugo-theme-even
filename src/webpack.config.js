const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// theme version
const version = 'v2.5.0'

const extractSass = new ExtractTextPlugin({
  filename: `even.${version}.css`
});

module.exports = {
  devtool: 'source-map',
  entry: {
    even: './js/main.js'
  },
  output: {
    path: path.join(__dirname, '../static/dist'),
    filename: `[name].${version}.js`
  },
  module: {
    rules: [
      {
        test:  /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
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
