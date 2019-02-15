import { request } from '../../utils'

function baseFetch ({
  url,
  offset = 0,
  limit = 10,
  // no every data list can be sort
  sort,
  config
}) {
  return request.get(url, {
    ...config,
    params: { offset, limit, sort }
  })
}

function prefixUrl (url, onlySelf) {
  const prefix = onlySelf ? `/users/${localStorage.getItem('userId')}` : ''
  return prefix + url
}

export function getPosts ({
  onlySelf,
  category,
  offset,
  limit,
  sort,
  config
}) {
  return baseFetch({
    url: prefixUrl(category ? `/${category}/posts` : '/posts', onlySelf),
    offset,
    limit,
    sort,
    config
  })
}

export function getComments ({
  onlySelf,
  postId,
  offset,
  limit,
  sort,
  config
}) {
  return baseFetch({
    url: prefixUrl(postId ? `/posts/${postId}/comments` : '/comments', onlySelf),
    offset,
    limit,
    sort,
    config
  })
}

export function getReplies ({
  commentId,
  offset,
  limit,
  sort,
  config
}) {
  return baseFetch({
    url: prefixUrl(commentId ? `/comments/${commentId}/replies` : '/replies'),
    offset,
    limit,
    sort,
    config
  })
}

export function getTeasings ({
  sort,
  offset,
  limit,
  config
}) {
  return baseFetch({
    url: '/teasings',
    offset,
    limit,
    sort,
    config
  })
}

export function getReports ({
  target,
  targetId,
  offset,
  limit,
  config
}) {
  let url = '/reports'
  if (target) url = targetId ? `/${target}/${targetId}` + url : `/${target}` + url

  return baseFetch({
    url,
    offset,
    limit,
    config
  })
}
