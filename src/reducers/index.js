//合并
import { combineReducers } from 'redux'

import { userInfo } from './userInfo'
import { detailinfo } from './detailinfo'

export default combineReducers({
  userInfo,
  detailinfo
})
