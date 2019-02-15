import { request } from '../../utils'

/**
 * 冻结用户
 * @param {string} id - 要冻结的用户id
 * @param {timestamp} time - 时间戳,要冻结的截止日期,默认为当前时间加上7天
 * @return {httpEventCollector}
 */
export default function freezeUser (id, freezeTime = Date.now() + (1000 * 60 * 60 * 24 * 7)) {
  return request.delete(`/users/${id}`, { params: { freezeTime } })
}
