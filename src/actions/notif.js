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
  })
    .then(response => {
      dispatch(displayNotifs(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}

export const createNotif = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/notifs'
    // data: {
    //   foo: 'bar',
    // }
  })
    .then(response => {
      dispatch(displayNotifs(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
