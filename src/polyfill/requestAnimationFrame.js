window.requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function (cb) {
    return window.setTimeout(cb, 16.67)
  }

window.cancelAnimationFrame = window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelAniamtionFrame ||
  function (id) {
    window.clearTimeout(id)
  }
