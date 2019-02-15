import iterator from './iterator'

export default class URLSearchParams {
  params = {}
  isSort = false

  constructor (url) {
    const startIndex = url.indexOf('?')
    const params = this.params
    if (startIndex !== -1) url = url.slice(startIndex + 1)

    url
      .split('&')
      .forEach(param => {
        param = param.split('=')
        params[param[0]] = param[1]
      })
  }

  /**
   * 插入一个指定的键/值对作为新的搜索参数。
   * @param {string} name
   * @param {string} value
   */

  append (name, value) {
    value = String(value)

    if (!this.params[name]) this.params[name] = value
    else if (typeof this.params[name] === 'string') this.params[name] = [this.params[name], value]
    else this.params[name].push(value)

    return this
  }

  /**
   * 从搜索参数列表里删除指定的搜索参数及其对应的值。
   * @param {string} name
   */

  delete (name) {
    delete this.params[name]
    return this
  }

  /**
   * 返回 Boolean 判断是否存在此搜索参数。
   * @param {string} name
   * @return {boolean}
   */

  has (name) {
    return !!this.params[name]
  }

  /**
   * 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
   * @param {string} name
   * @param {string} value
   */

  set (name, value) {
    this.params[name] = String(value)
    return this
  }

  /**
   * 获取指定搜索参数的第一个值。
   * @param {string} name
   */

  get (name) {
    const param = this.params[name]
    if (param) return typeof param === 'string' ? param : param[0]
  }

  /**
   * 获取指定搜索参数的所有值，返回是一个数组。
   * @param {string} name
   * @return {array}
   */

  getAll (name) {
    const param = this.params[name]
    if (!param) return []
    return typeof param === 'string' ? [param] : [...param]
  }

  /**
   * 返回iterator 此对象包含了键/值对的所有键名
   * @return {iterator}
   */

  keys () {
    return iterator(Object.keys(this.params))
  }

  /**
   * 返回iterator 此对象包含了键/值对的所有值。
   * @return {iterator}
   */

  values () {
    const params = this.params
    return iterator(Object.keys(params).map(name => params[name]))
  }

  /**
   * 返回一个iterator可以遍历所有键/值对的对象
   * @return {iterator}
   */

  entries () {
    const params = this.params
    return iterator(Object
      .keys(params)
      .map(name => [name, params[name]]))
  }

  /**
   * 按键名排序。
   */

  sort () {
    this.isSort = true
    return this
  }

  /**
   * 返回搜索参数组成的字符串，可直接使用在URL上。
   * @return {string}
   */

  toString () {
    const params = this.params
    const names = Object.keys(params)

    if (this.isSort) names.sort()

    return '?' + names
      .map(name => {
        const value = params[name]
        return typeof value === 'string'
          ? `${name}=${value}`
          : value.map(val => `${name}=${val}`).join('&')
      })
      .join('&')
  }
}
