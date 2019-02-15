const path = require('path')
const rootPath = process.cwd()
const srcPath = path.join(rootPath, './src')
const distPath = path.join(rootPath, './dist')
const devMode = process.env.NODE_ENV === 'development'
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const chalk = require('chalk')

function resolve (dir) {
  return path.resolve(srcPath, dir)
}

module.exports = {
  // 上下文路径
  context: srcPath,
  // entry point
  entry: './main.js',
  // 输出路径
  output: {
    path: distPath,
    publicPath: '/'
  },
  resolve: {
    // 后缀自动补全
    extensions: ['.vue', '.js', '.less', '.png', '.jpg', '.gif', '.jpeg', '.json', '.html'],
    // 文件夹别名
    alias: {
      '@': resolve('.'),
      assets: resolve('assets'),
      components: resolve('components'),
      containers: resolve('containers'),
      less: resolve('less'),
      router: resolve('router'),
      middlewares: resolve('middlewares'),
      utils: resolve('utils'),
      vux: resolve('vux')
    },
    // 模块寻找路径
    modules: [
      srcPath,
      path.join(rootPath, 'node_modules')
    ]
  },
  module: {
    // 解析器
    rules: [
      {
        resourceQuery: /blockType=i18n/,
        loader: '@kazupon/vue-i18n-loader'
      },
      {
        resourceQuery: /blockType=i18n/,
        loader: 'yaml-loader'
      },
      // vue解析
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      // 字体解析
      {
        test: /\.(woff|ttf)(\?.*)?$/,
        use: 'file-loader'
      },
      // 图片解析
      {
        test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 4092}
          }
        ]
      },
      // 外部css解析
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // less解析
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: false
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
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.join(process.cwd(), './src/less/index.less')
              ],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        include: path.join(process.cwd(), 'src'),
        exclude: /(node_modules|vux)/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              configFile: path.join(__dirname, `lint/eslint.${devMode ? 'dev' : 'prod'}.json`)
            }
          }
        ]
      },
      // babel转换
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                loose: true,
                modules: false
              }]],
              plugins: [
                'lodash',
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: true}],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-export-default-from',
                'transform-vue-jsx'
              ],
              comments: devMode,
              compact: !devMode,
              babelrc: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // vue-loader所需插件,主要通过此插件来解析vue中不同的语言块
    // 如script标签会被loader中所有匹配js的加载器处理
    new VueLoaderPlugin(),
    // 样式规范检测器
    new StyleLintPlugin({
      configFile: path.join(__dirname, 'lint/stylelint.json'),
      context: path.join(process.cwd(), 'src'),
      files: '[^vux]/*.(less|vue)',
      fix: true
    }),
    // 进度条美化插件
    new ProgressBarPlugin({
      format: `构建中 [:bar] 已完成百分之${chalk.green.bold(':percent')} (:elapsed)秒`
    }),
    // 自动生成html,
    new HtmlPlugin({
      template: path.join(srcPath, 'index.html'),
      favicon: path.join(srcPath, './assets/favicon.ico'),
      minify: !devMode,
      title: 'Web App'
    })
  ]
}