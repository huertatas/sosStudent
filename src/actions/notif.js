import axios from 'axios'

export const DISPLAY_NOTIFS = 'DISPLAY_NOTIFS'

export const displayNotifs = payload => ({
  type: DISPLAY_NOTIFS,
  payload
})

export const getNotifs = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/notifs'
    // params: {
    //   limit: 20,
    //   offset
    // }
  })
    .then(response => {
      dispatch(displayNotifs(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}