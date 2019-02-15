import { request } from '../../utils'

/**
 * 获取用户列表
 * @param {object} options
 * @property {number} options.offset - 从第几个开始获取
 * @property {number} options.limit - 获取几个
 * @return {httpEventCollector}
 */
export default function getUsers (options = {}) {
  const { offset = 0, limit = 5 } = options
  if (typeof offset !== 'number' || typeof limit !== 'number') throw new TypeError('offset和limit必须为数字')
  return request.get('/users', { params: { offset, limit } })
}
