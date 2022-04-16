import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
import { setLoader, endLoader } from './loader'

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
  dispatch(setLoader())
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/rooms'
  })
    .then(response => {
      dispatch(endLoader())
      dispatch(displayRoom(response.data.data))
    })
    .catch(error => {
      dispatch(endLoader())
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}

export const getRoomById = roomId => dispatch => {
  dispatch(setLoader())
  axios({
    method: 'GET',
    url: `https://mobilebackstrapi.herokuapp.com/api/rooms/${roomId}?populate=*`
  })
    .then(response => {
      dispatch(endLoader())
      dispatch(displayRoomById(response.data.data))
    })
    .catch(error => {
      dispatch(endLoader())
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}

export const createRoom = nameRoom => dispatch => {
  dispatch(setLoader())
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
      dispatch(endLoader())
      showMessage({
        message: 'Salle de classe créée',
        type: 'success'
      })
    })
    .catch(error => {
      dispatch(endLoader())
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}
