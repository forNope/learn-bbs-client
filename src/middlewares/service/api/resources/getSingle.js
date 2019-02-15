import { request } from '../../utils'

export function getPost ({ id, config }) {
  return request.get(`/posts/${id}`, config)
}

export function getComment ({ id, config }) {
  return request.get(`/comments/${id}`, config)
}

export function getReply ({ id, config }) {
  return request.get(`/replies/${id}`, config)
}

export function getTeasing ({ id, config }) {
  return request.get(`/teasings/${id}`, config)
}

export function getReport ({ id, config }) {
  return request.get(`/reports/${id}`, config)
}
