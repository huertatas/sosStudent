import axios from 'axios'

export const DISPLAY_ROOMS = 'DISPLAY_ROOMS'

export const displayRoom = payload => ({
  type: DISPLAY_ROOMS,
  payload
})

export const getRooms = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/rooms'
  })
    .then(response => {
      dispatch(displayRoom(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}

export const createRoom = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/rooms'
    // data: {
    //   foo: 'bar',
    // }
  })
    .then(response => {
      dispatch(displayRoom(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
