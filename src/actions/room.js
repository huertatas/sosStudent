import axios from 'axios'

export const DISPLAY_ROOMS = 'DISPLAY_ROOM'

export const displayRoom = payload => ({
  type: DISPLAY_ROOMS,
  payload
})

export const getRooms = offset => dispatch => {
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/rooms'
    // params: {
    //   limit: 20,
    //   offset
    // }
  })
    .then(response => {
      // dispatch(displayRoom(response.data.data.results))
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
