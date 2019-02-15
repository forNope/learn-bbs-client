import { request } from '../../utils'

function deleteResource ({ id, type, config }) {
  return request.delete(`/${type}/${id}`, config)
}

export function deletePost ({ id, config }) {
  return deleteResource({ id, type: 'posts', config })
}

export function deleteComment ({ id, config }) {
  return deleteResource({ id, type: 'comments', config })
}

export function deleteReply ({ id, config }) {
  return deleteResource({ id, type: 'replies', config })
}

export function deleteTeasing ({ id, config }) {
  return deleteResource({ id, type: 'teasings', config })
}

export function deleteReport ({ id, config }) {
  return deleteResource({ id, type: 'reports', config })
}
