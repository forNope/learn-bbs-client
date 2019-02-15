if (!Object.assign) {
  Object.assign = function assign (target, ...sources) {
    if (!target) throw new TypeError(' Cannot convert undefined or null to object')
    target = Object(target)
    sources
      .filter(source => !!source)
      .forEach(source => {
        Object
          .keys(source)
          .forEach(key => {
            target[key] = source[key]
          })
      })
    return target
  }
}
