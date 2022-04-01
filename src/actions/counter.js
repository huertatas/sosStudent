export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementCounter = (payload = 1) => {
  return {
    type: INCREMENT_COUNTER,
    payload
  }
}

export const decrementCounter = () => {
  return { type: DECREMENT_COUNTER }
}
