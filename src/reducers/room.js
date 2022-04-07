import { DISPLAY_ROOMS } from '../actions/room'

const initialState = {
  rooms: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROOMS:
      return { ...state, rooms: action.payload }
    default:
      return state
  }
}
