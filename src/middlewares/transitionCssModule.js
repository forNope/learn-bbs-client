function connect (connector, ...args) {
  return [...args].join(connector)
}

export default function transitionCssModule (Vue) {
  Vue.prototype.$transitionCssModule = function (key, options = {}) {
    const {connector = '_', ...attach} = options
    return {
      enterClass: connect(connector, key, 'enter'),
      enterActiveClass: connect(connector, key, 'enter', 'active'),
      enterToClass: connect(connector, key, 'enter', 'to'),
      leaveClass: connect(connector, key, 'leave'),
      leaveActiveClass: connect(connector, key, 'leave', 'active'),
      leaveToClass: connect(connector, key, 'leave', 'to'),
      appearClass: connect(connector, key, 'appear'),
      appearActiveClass: connect(connector, key, 'appear', 'active'),
      appearToClass: connect(connector, key, 'appear', 'to'),
      ...attach
    }
  }
}
