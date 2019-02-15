import { request, extendCollectorEvent } from '../../utils'

function baseReport ({
  id,
  type,
  url,
  reason,
  config
}) {
  const req = request.post(`/${type}/${id}/reports`, { reason }, config)
  extendCollectorEvent(req)
  return req
}

export function reportPost ({
  id,
  reason,
  config
}) {
  return baseReport({ id, type: 'posts', reason, config })
}

export function reportComment ({
  id,
  reason,
  config
}) {
  return baseReport({ id, type: 'comments', reason, config })
}

export function reportReply ({
  id,
  reason,
  config
}) {
  return baseReport({ id, type: 'replies', reason, config })
}

export function reportTeasing ({
  id,
  reason,
  config
}) {
  return baseReport({ id, type: 'teasings', reason, config })
}
