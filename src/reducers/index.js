import { combineReducers } from 'redux'
import rooms from './room'
import notifs from './notif'
import login from './login'

export default combineReducers({
  rooms,
  notifs,
  login
})
