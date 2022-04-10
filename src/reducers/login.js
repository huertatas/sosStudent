import { DISPLAY_USER_INFO } from '../actions/login'

const initialState = {
  userInfo: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_USER_INFO:
      return { ...state, userInfo: action.payload }
    default:
      return state
  }
}
