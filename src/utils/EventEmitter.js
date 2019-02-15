export default class EventEmitter {
  _listeners = {}

  on (event, listener) {
    const events = event.split(' ')

    events.forEach(event => {
      if (!this._listeners[event]) this._listeners[event] = []
      this._listeners[event].push(listener)
    })

    return this
  }

  off (event, listener) {
    const events = event.split(' ')

    if (listener) {
      events.forEach(event => {
        const listeners = this._listeners[event]
        if (listeners) {
          const index = listeners.indexOf(listener)
          index !== -1 && listeners.splice(index, 1)
        }
      })
    } else {
      events.forEach(event => {
        this._listeners[event] = []
      })
    }

    return this
  }

  once (event, listener) {
    const self = this

    this.on(event, function cb (...args) {
      listener(...args)
      self.off(event, cb)
    })

    return this
  }

  emit (event, ...args) {
    const events = event.split(' ')

    events.forEach(event => {
      const listeners = this._listeners[event]
      if (listeners) {
        listeners.forEach(listener => listener(...args))
      }
    })

    return this
  }
}
