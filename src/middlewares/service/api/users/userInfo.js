import { request } from '../../utils'

export function completeUserInfo ({
  birthday,
  ages,
  phone,
  config
}) {
  return request.put(
    `/users/${JSON.parse(localStorage.getItem('userInfo')).id}/info`,
    {
      birthday,
      ages,
      phone
    },
    config
  )
}
