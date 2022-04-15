import { DISPLAY_USER_INFO, LOGOUT } from '../actions/login'

const initialState = {
  userInfo: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_USER_INFO:
      return { ...state, userInfo: action.payload }
    case LOGOUT:
      return { ...state, userInfo: {} }
    default:
      return state
  }
}
