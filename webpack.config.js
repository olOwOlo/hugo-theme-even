const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const AssetsWebpackPlugin = require('assets-webpack-plugin');

const extractSass = new MiniCssExtractPlugin({
  filename: `even.[contenthash:8].min.css`
});

const cleanBuild = new CleanWebpackPlugin([
  'static/dist/*'
]);

const assetsManifest = new AssetsWebpackPlugin({
  filename: 'assets.json',
  path: path.join(__dirname, 'data/even'),
  fullPath: false,
  processOutput: assets => {
    const output = {};
    Object.keys(assets)
        .filter(bundle => bundle !== '')
        .forEach(bundle => output[bundle] = assets[bundle]);
    return JSON.stringify(output, null, 2);
  }
});

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    even: path.join(__dirname, 'src/js/main.js')
  },
  output: {
    path: path.join(__dirname, 'static/dist'),
    filename: `[name].[contenthash:8].min.js`,
    chunkFilename: '[name].[contenthash:8].min.js',
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', options: { minimize: true, sourceMap: true }
          }, {
            loader: 'postcss-loader', options: { sourceMap: true }
          }, {
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ]
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
  plugins: [extractSass, assetsManifest, cleanBuild],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          }
        }
      })
    ]
  }
};
