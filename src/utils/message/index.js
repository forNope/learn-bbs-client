import './styles.less'

function createElement (msg, type) {
  const el = document.createElement('div')
  let symbol
  switch (type) {
  case 'success':
    symbol = '✓'
    break
  case 'warn':
  case 'info':
    symbol = '!'
    break
  case 'error':
    symbol = 'x'
    break
  }
  el.className = `utils-msg-wrapper ${type}`
  el.innerHTML = `
      <span class="icon ${type}">${symbol}</span>
      <span class="text ${type}">${msg}</span>
    `
  return el
}

// function animationController (el) {
//   const initAni = () => {
//     el.style.opacity = 1
//     el.style.top = '24px'
//   }
//
//   const startAni = () => {
//     el.style.opacity = 0
//     el.style.top = initialTop + 'rem'
//   }
//
//   setTimeout(() => {
//     el.style.opacity = 1
//     el.style.top = initialTop + offset + 'rem'
//
//     setTimeout(() => {
//       el.style.opacity = 0
//       el.style.top = initialTop + 'rem'
//     }, 2500)
//   })
// }

class Message {
  activeEls = []

  config = {
    containerEl: document.body,
    offset: 0.5
  }

  constructor (config = {}) {
    this.config = {
      ...this.config,
      ...config
    }
  }

  show (msg, duration, type) {
    // console.log('show', Vue.prototype.$vux.toast)
    // Vue.prototype.$vux.toast.show({
    //   position: 'top',
    //   text: msg,
    //   type,
    //   time: duration
    // })
    const {containerEl, offset} = this.config
    const el = createElement(msg, type)
    const initialTop = this.activeEls.length * (1.3 + offset)
    containerEl.appendChild(el)
    el.style.top = initialTop + 'rem'
    this.activeEls.push(el)
    setTimeout(() => {
      el.style.opacity = 1
      el.style.top = initialTop + offset + 'rem'

      setTimeout(() => {
        el.style.opacity = 0
        el.style.top = initialTop + 'rem'

        setTimeout(() => {
          containerEl.removeChild(el)
          this.activeEls.splice(this.activeEls.indexOf(el), 1)
        }, 300)
      }, 2500)
    })
  }

  success (msg, duration) {
    this.show(msg, duration, 'success')
  }

  warn (msg, duration) {
    this.show(msg, duration, 'warn')
  }

  info (msg, duration) {
    this.show(msg, duration, 'text')
  }

  error (msg, duration) {
    this.show(msg, duration, 'error')
  }
}

export default new Message()
