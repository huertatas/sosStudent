import { combineReducers } from 'redux'
import rooms from './room'
import notifs from './notif'
import login from './login'
import notifee from './notifee'
import colors from './colors'
import loader from './loader'

export default combineReducers({
  rooms,
  notifs,
  login,
  notifee,
  colors,
  loader
})
