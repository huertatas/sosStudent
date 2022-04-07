import { combineReducers } from 'redux'
import counter from './counter'
import room from './room'

export default combineReducers({
  counter,
  room
})
