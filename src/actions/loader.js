export const SET_LOADER = 'SET_LOADER'
export const END_LOADER = 'END_LOADER'

export const setLoader = payload => ({
  type: SET_LOADER,
  payload
})

export const endLoader = payload => ({
  type: END_LOADER,
  payload
})
