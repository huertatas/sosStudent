import { DISPLAY_USER_TOKEN } from '../actions/login'

const initialState = {
  token: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_USER_TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
}
