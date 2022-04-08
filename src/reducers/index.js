import { combineReducers } from 'redux'
import counter from './counter'
import rooms from './room'
import notifs from './notif'
import login from './login'

export default combineReducers({
  counter,
  rooms,
  notifs,
  login
})
