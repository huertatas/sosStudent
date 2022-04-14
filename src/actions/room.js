import axios from 'axios'

export const DISPLAY_ROOMS = 'DISPLAY_ROOMS'
export const DISPLAY_ROOM_BY_ID = 'DISPLAY_ROOM_BY_ID'

export const displayRoom = payload => ({
  type: DISPLAY_ROOMS,
  payload
})

export const displayRoomById = payload => ({
  type: DISPLAY_ROOM_BY_ID,
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

export const getRoomById = roomId => dispatch => {
  axios({
    method: 'GET',
    url: `https://mobilebackstrapi.herokuapp.com/api/rooms/${roomId}?populate=*`
  })
    .then(response => {
      dispatch(displayRoomById(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}

export const createRoom = nameRoom => dispatch => {
  axios({
    method: 'POST',
    url: 'https://mobilebackstrapi.herokuapp.com/api/rooms',
    data: {
      data: {
        Name: nameRoom
      }
    }
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
