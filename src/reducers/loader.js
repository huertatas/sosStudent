import { SET_LOADER, END_LOADER } from '../actions/loader'

const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, loading: true }
    case END_LOADER:
      return { ...state, loading: false }
    default:
      return state
  }
}
