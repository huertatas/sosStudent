import { DISPLAY_ROOMS } from '../actions/room'
import { DISPLAY_ROOM_BY_ID } from '../actions/room'

const initialState = {
  rooms: [],
  room: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROOMS:
      return { ...state, rooms: action.payload }
    case DISPLAY_ROOM_BY_ID:
      return { ...state, room: action.payload }
    default:
      return state
  }
}
