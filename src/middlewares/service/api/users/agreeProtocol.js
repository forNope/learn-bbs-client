import { request } from '../../utils'

export function agreeBBSProtocol ({
  config
} = {}) {
  const id = JSON.parse(localStorage.getItem('userInfo')).id
  return request.put(`/users/${id}/protocol/BBS`, config)
}

export function agreeTeasingProtocol ({
  config
} = {}) {
  const id = JSON.parse(localStorage.getItem('userInfo')).id
  return request.put(`/users/${id}/protocol/teasing`, config)
}
