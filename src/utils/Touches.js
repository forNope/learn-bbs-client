import EventEmitter from './EventEmitter'

export default class Touches extends EventEmitter {
  el

  _events = {
    handleTouchStart: (e) => {
      this.isTouching = true
      this.lastX = e.touches[0].clientX
      this.lastY = e.touches[0].clientY
      this.emit('touchstart', e)
    },
    handleTouchMove: (e) => {
      const offsetX = e.touches[0].clientX - this.lastX
      const offsetY = e.touches[0].clientY - this.lastY

      if (Math.abs(offsetX) > Math.abs(offsetY)) {
        this.direction = offsetX > 0 ? 'left' : 'right'
      } else {
        this.direction = offsetY > 0 ? 'top' : 'bottom'
      }

      this.distance.x = offsetX
      this.distance.y = offsetY
      this.emit('touchmove', e)
    },
    handleTouchEnd: (e) => {
      this.lastX = e.changedTouches[0].clientX
      this.lastY = e.changedTouches[0].clientY
      this.emit('touchend', e)
      this.isTouching = false
    }
  }

  isTouching = false
  lastX = 0
  lastY = 0
  // value: top, bottom, left, right
  direction = ''
  distance = {
    x: 0,
    y: 0
  }

  constructor (el, options) {
    super()
    this.el = el
    const {
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd
    } = this._events
    el.addEventListener('touchstart', handleTouchStart, false)
    el.addEventListener('touchmove', handleTouchMove, false)
    el.addEventListener('touchend', handleTouchEnd, false)
  }

  destroy () {
    const {
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd
    } = this._events
    this.el.removeEventListener('touchstart', handleTouchStart, false)
    this.el.removeEventListener('touchmove', handleTouchMove, false)
    this.el.removeEventListener('touchend', handleTouchEnd, false)
  }
}
