import axios from 'axios'
export const DISPLAY_USER_TOKEN = 'DISPLAY_USER_TOKEN'

export const displayUserToken = payload => ({
  type: DISPLAY_USER_TOKEN,
  payload
})

export const login =
  ({ email, password }) =>
  dispatch => {
    axios
      .post('https://mobilebackstrapi.herokuapp.com/api/auth/local', {
        identifier: email,
        password: password
      })
      .then(response => {
        dispatch(displayUserToken(response.data))
      })
      .catch(error => {
        console.log(`🐛🐛🐛 Error in login action:${error}`)
      })
  }
