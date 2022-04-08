import { GET_USER_TOKEN } from '../actions/login'

const initialState = {
  token: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_TOKEN:
      return { ...state, ...action.payload }
    default:
      return state
  }
}