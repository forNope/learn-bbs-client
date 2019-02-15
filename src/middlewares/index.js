import eventBus from './eventBus'
import service from './service'
import transitionCssModule from './transitionCssModule'

// 事件分发器,无须自己卸载事件
Vue.use(eventBus)
// 网络请求层
Vue.use(service)
Vue.use(transitionCssModule)
