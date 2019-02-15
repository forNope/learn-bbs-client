import { request } from './utils'
import upperFirst from 'lodash/upperFirst'
import api from './api'

const resourceArr = ['post', 'comment', 'reply', 'teasing']
const resourcesArr = ['posts', 'comments', 'replies', 'teasings']
const ResourceArr = resourceArr.map(v => upperFirst(v))
// const ResourcesArr = resourcesArr.map(v => upperFirst(v))

function extendAlias (target) {
  resourceArr.forEach((resource, i) => {
    const resources = resourcesArr[i]
    const Resource = ResourceArr[i]
    // const Resources = ResourcesArr[i]

    target['agree' + Resource] = ({ id, config }) => api.evaluateResource({
      id,
      type: resources,
      isAgree: true,
      isCancel: false,
      config
    })

    target['cancelAgree' + Resource] = ({ id, config }) => api.evaluateResource({
      id,
      type: resources,
      isAgree: true,
      isCancel: true,
      config
    })

    target['disagree' + Resource] = ({ id, config }) => api.evaluateResource({
      id,
      type: resources,
      isAgree: false,
      isCancel: false,
      config
    })

    target['cancelDisagree' + Resource] = ({ id, config }) => api.evaluateResource({
      id,
      type: resources,
      isAgree: false,
      isCancel: true,
      config
    })
  })

  return target
}

export default function service (Vue) {
  Vue.prototype.$service = {
    request,
    ...api
  }

  extendAlias(Vue.prototype.$service)
}
