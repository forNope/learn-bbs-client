/**
 * @param {string|array} target
 * @return {StrArrIterator}
 */
export default function iterator (target) {
  const tag = Object.prototype.toString.call(target)
  if (tag === '[object String]' || tag === '[object Array]') return new StrArrIterator(target)
}

class StrArrIterator {
  target
  index = 0

  constructor (target) {
    this.target = target
  }

  next () {
    return {
      value: this.target[this.index++],
      done: this.index > this.target.length
    }
  }
}
