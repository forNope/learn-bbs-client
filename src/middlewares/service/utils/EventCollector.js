export default class EventCollector {
  _listeners = {}

  constructor (extend) {
    this.collect(Object.keys(extend))
  }

  collect (events) {
    if (typeof events === 'string') events = [events]
    
    const {_listeners} = this

    events.forEach(event => {
      if (!_listeners[event]) _listeners[event] = []
      this[event] = (fn) => {
        _listeners[event].push(fn)
        return this
      }
    })
  }

  emit (events, ...args) {
    if (typeof events === 'string') events = [events]

    const {_listeners} = this

    events.forEach(event => {
      _listeners[event] && _listeners[event].forEach(fn => fn(...args))
    })
  }
}
