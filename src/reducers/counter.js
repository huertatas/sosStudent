import { INCREMENT_COUNTER } from '../actions/counter'
import { DECREMENT_COUNTER } from '../actions/counter'

const initialState = {
  counterValue: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue + action.payload
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
    default:
      return state
  }
}
