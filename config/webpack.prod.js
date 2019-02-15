const path = require('path')
const baseConfig = require('./webpack.common')
const merge = require('webpack-merge')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('inline-manifest-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
const distPath = baseConfig.output.path

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new ManifestPlugin('manifest')
    // 预渲染
    // 暂时不启用,最后阶段再启用
    // new PrerenderSPAPlugin({
    //   staticDir: distPath,
    //   routes: ['/', '/protocol']
    // })
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    minimizer: [
      new UglifyPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 5,
          warnings: false,
          output: {
            beautify: false
          },
          compress: {
            drop_console: true
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        style: {
          test: /\.(less|css)$/,
          chunks: 'all',
          name: 'styles'
        },
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor'
        }
      }
    }
  }
})
