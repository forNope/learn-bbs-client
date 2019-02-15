import config from '../config'
import values from 'lodash/values'
import { EventCollector } from './'

const http = axios.create({
  timeout: 5000,
  baseURL: `http://localhost:8080${config.baseURL}/${config.apiVersion}/`,
  withCredentials: true
})
const CancelToken = axios.CancelToken

const httpStatusMap = {
  200: 'ok',
  201: 'created',
  202: 'accepted',
  204: 'noContent',
  400: 'badRequest',
  401: 'unauthorized',
  403: 'forbidden',
  404: 'notFound'
}
const httpStatusCollection = ['process', 'allOk', 'redirect', 'clientError', 'serverError']
const cancels = []

http.interceptors.response.use(res => {
  cancels.splice(res.config.cancelIndex, 1)
  return res
})

/**
 * @property {httpWithoutDataMethod} get
 * @property {httpWithoutDataMethod} delete
 * @property {httpWithoutDataMethod} head
 * @property {httpWithoutDataMethod} options
 * @property {httpWithDataMethod} post
 * @property {httpWithDataMethod} put
 * @property {httpWithDataMethod} patch
 * @property {function} cancel - 取消所有请求
 * @param  {object} config
 * @return {httpEventCollector}
 */
export default function request (config) {
  const source = CancelToken.source()
  let collector = new EventCollector({
    cancel () {
      source.cancel()
    }
  })

  collector.collect(values(httpStatusMap))
  collector.collect([
    'networkError',
    ...httpStatusCollection,
    'complete',
    'then',
    'catch'
  ])

  http
    .request({
      ...config,
      cancelIndex: cancels.push(source.cancel) - 1,
      cancelToken: source.token
    })
    .then(({status, data}) => {
      collector.emit(httpStatusMap[status], data)
      collector.emit(httpStatusCollection[Number(String(status)[0]) - 1], data)
      collector.emit('then', data)
      collector.emit('complete', data)
    })
    .catch(err => {
      if (!axios.isCancel(err)) {
        if (err.response && err.response.status === 401) {
          window.logback()
        }

        collector.emit('networkError', err)
        collector.emit('catch', err)
        collector.emit('complete', err)
      }
    })
  collector.lock = function () {
    collector.cancel = function () {}
  }
  return collector
}

['get', 'delete', 'head', 'options'].forEach(method => {
  request[method] = function (url, config) {
    return request({
      url,
      method,
      ...config
    })
  }
})

;['post', 'put', 'patch'].forEach(method => {
  request[method] = function (url, data, config) {
    return request({
      url,
      method,
      data,
      ...config
    })
  }
})

request.cancel = function () {
  cancels.forEach(c => c())
  cancels.splice(0, cancels.length)
}

/**
 * @typedef {function} httpEventListen
 * @param {function} cb
 * @return {httpEventCollector}
 */

/**
 * @typedef {object} httpEventCollector
 * @property {httpEventListen} ok
 * @property {httpEventListen} created
 * @property {httpEventListen} accepted
 * @property {httpEventListen} noContent
 * @property {httpEventListen} badRequest
 * @property {httpEventListen} unauthorized
 * @property {httpEventListen} forbidden
 * @property {httpEventListen} notFound
 */

/**
 * @typedef {function} httpWithDataMethod
 * @param {string} url
 * @param {*} data
 * @param {object} config
 * @return {httpEventCollector}
 */

/**
 * @typedef {function} httpWithoutDataMethod
 * @param {string} url
 * @param {object} config
 * @return {httpEventCollector}
 */
