import { DISPLAY_NOTIFS } from '../actions/notif'

const initialState = {
  notifs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFS:
      return { ...state, notifs: action.payload }
    default:
      return state
  }
}
