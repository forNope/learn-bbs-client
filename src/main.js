// 全局样式
import 'less/import'
// 使旧浏览器兼容新api
import './polyfill'
import './middlewares'
import './utils'
import App from './App'
import Scroller from 'vue-scroller'
import router from 'router'
import NoSSR from 'vue-no-ssr'
import { message } from 'utils'
// import ToastPlugin from 'vux/plugins/toast'

window.logback = () => {
  message.warn('登录中')
  location.href =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx81e0d56d49a56a80&redirect_uri=' +
    encodeURIComponent(location.href) +
    '&response_type=code&scope=snsapi_userinfo#wechat_redirect'
}

window.onerror = function (msg, url, line, column, err) {
  axios.post('/api/v1/admins/errorlog', {
    errorMessage: msg,
    scriptURI: url,
    lineNo: line,
    columnNo: column,
    error: err
  })

  return false
}

Vue.config.errorHandler = function (err, vm, info) {
  axios.post('/api/v1/admins/errorlog', {
    errorMessage: info,
    error: err
  })
}

Vue.prototype.$msg = message

Vue.component('v-no-ssr', NoSSR)
// Vue.use(ToastPlugin)
Vue.use(Scroller)

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
  el: '#app',
  router,
  render: h => <App />
})

const BBSList = ['/', '/welcome', '/protocol']
const teasingList = ['/platform', '/teasing-index', '/teasing-protocol']

// 路由跳转时取消所有网络请求
router.beforeEach((to, from, next) => {
  try {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if (BBSList.indexOf(to.path) !== -1 && user.isAgreeBBSProtocol) next('/categories')
    if (teasingList.indexOf(to.path) !== -1 && user.isAgreeTeasingsProtocol) next('/teasings')
  } catch (e) {}

  Vue.prototype.$service.request.cancel()
  next()
})
