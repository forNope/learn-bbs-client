import { request, extendCollectorEvent } from '../../utils'

function baseRelease (url, data, config) {
  const req = request.post(url, data, config)
  extendCollectorEvent(req)

  return req
}

export function releasePost ({
  category,
  anonymous,
  content,
  config
}) {
  return baseRelease(`/${category}/posts`, {
    anonymous,
    content
  }, config)
}

export function releaseComment ({
  postId,
  anonymous,
  content,
  config
}) {
  return baseRelease(`/posts/${postId}/comments`, {
    anonymous,
    content
  }, config)
}

export function releaseReply ({
  commentId,
  receiverReplyId,
  anonymous,
  content,
  config
}) {
  return baseRelease(`/comments/${commentId}/replies`, {
    anonymous,
    content,
    receiverReplyId
  }, config)
}

export function releaseTeasing ({
  content,
  anonymous,
  config
}) {
  return baseRelease('/teasings', {
    content,
    anonymous
  }, config)
}
