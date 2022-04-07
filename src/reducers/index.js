import { combineReducers } from 'redux'
import counter from './counter'
import rooms from './room'

export default combineReducers({
  counter,
  rooms
})
