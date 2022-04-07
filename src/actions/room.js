import axios from 'axios'

export const DISPLAY_ROOMS = 'DISPLAY_ROOM'

export const displayRoom = payload => ({
  type: DISPLAY_ROOMS,
  payload
})

export const getRooms = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/rooms'
    // params: {
    //   limit: 20,
    //   offset
    // }
  })
    .then(response => {
      dispatch(displayRoom(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
