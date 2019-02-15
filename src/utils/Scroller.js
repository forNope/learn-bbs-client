import Touches from './Touches'

// function getBounding (el) {
//
// }

export default class Scroller {
  static scrollTo (el, x, y, animate) {
    // if animate is true, use default options
    if (animate === true) animate = {}
    // const {speed = 500, func = ''} = animate

    el.scrollTop = y
    el.scrollLeft = x
  }

  static scrollBy (el, offsetX, offsetY, animate) {
    // if animate is true, use default options
    if (animate === true) animate = {}
    const {speed = 500, func = ''} = animate

    el.style.cssText = `
      ${animate ? `transition: all ${speed}ms ${func};` : ''}
      transform: translate3d(${offsetX}px, ${offsetY}px, 0);
    `

    // clear transition
    if (animate) {
      setTimeout(() => {
        el.style.transition = ''
      }, speed)
    }
  }

  el
  options
  touches
  hasOutBouding = false

  _events = {
    handleTouchMove: (e) => {
      const {axis = 'y', outBoundingSpeed = 1} = this.options
      const {x, y} = this.touches.distance
      const el = this.el
      const isXLeftBounding = el.scrollLeft = 0
      const isXRightBounding = el.scrollLeft === el.scrollWidth - el.clientWidth
      const isYTopBounding = el.scrollTop === 0
      const isYBottomBounding = el.scrollTop === el.scrollHeight - el.clientHeight
      const isXBounding = isXLeftBounding || isXRightBounding
      const isYBounding = isYTopBounding || isYBottomBounding

      if (isXBounding || isYBounding) {
        if (axis === 'x' && isXBounding) {
          this.scrollBy(x / 5 * outBoundingSpeed, 0, false)
          if ((isXLeftBounding && this.touches.direction === 'left') ||
            (isXRightBounding && this.touches.direction === 'right')) e.preventDefault()
        } else if (axis === 'y' && isYBounding) {
          this.scrollBy(0, y / 5 * outBoundingSpeed, false)
          if ((isYTopBounding && this.touches.direction === 'top') ||
            (isYBottomBounding && this.touches.direction === 'bottom')) e.preventDefault()
        }

        this.hasOutBouding = true
      }
    },
    handleTouchEnd: () => {
      if (this.hasOutBouding) this.scrollBy(0, 0, true)
      this.hasOutBouding = false
    }
  }

  constructor (el, options = {}) {
    window.el = el
    this.el = el
    this.options = options
    this.touches = new Touches(el)
    const {handleTouchMove, handleTouchEnd} = this._events
    this.touches.on('touchmove', handleTouchMove)
    this.touches.on('touchend', handleTouchEnd)
  }

  scrollTo (x, y, animate) {
    Scroller.scrollTo(this.el, x, y, animate)
  }

  scrollBy (offsetX, offsetY, animate) {
    Scroller.scrollBy(this.el, offsetX, offsetY, animate)
  }
}
