const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV === 'development'

module.exports = function (libName, excluded) {
  return {
    test (p) {
      if (!libName) return true

      if (path.extname(p) === '.less') {
        const isInclude = p.includes(`/${libName}/`)
        return excluded ? !isInclude : isInclude
      }
    },
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
          // 外部库关闭cssModule
          cssModule: libName ? !!excluded : true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => {
            const plugins = []
            if (!devMode) {
              plugins.push(require('autoprefixer'))
            }
            return plugins
          },
          sourceMap: true
        }
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true
        }
      }]
  }
}