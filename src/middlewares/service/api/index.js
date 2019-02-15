import * as resourceApi from './resources'
import * as wxApi from './wx'
import * as userApi from './users'

export default {
  ...resourceApi,
  ...userApi,
  ...wxApi
}
