import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
import { setLoader, endLoader } from './loader'

export const DISPLAY_NOTIFS = 'DISPLAY_NOTIFS'

export const displayNotifs = payload => ({
  type: DISPLAY_NOTIFS,
  payload
})

export const getNotifs = () => dispatch => {
  dispatch(setLoader())
  axios({
    method: 'GET',
    url: 'https://mobilebackstrapi.herokuapp.com/api/notifs'
  })
    .then(response => {
      dispatch(endLoader())
      dispatch(displayNotifs(response.data.data))
    })
    .catch(error => {
      dispatch(endLoader())
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}

export const deleteNotifs = idNotif => dispatch => {
  dispatch(setLoader())
  axios({
    method: 'DELETE',
    url: `https://mobilebackstrapi.herokuapp.com/api/notifs/${idNotif}`
  })
    .then(response => {
      dispatch(endLoader())
      showMessage({
        message: 'Elève secouru',
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

export const createNotif = (idRoom, helpMessage) => dispatch => {
  dispatch(setLoader())
  axios({
    method: 'POST',
    url: 'https://mobilebackstrapi.herokuapp.com/api/notifs',
    data: {
      data: {
        Name: helpMessage.name,
        Message: helpMessage.message,
        room: idRoom
      }
    }
  })
    .then(response => {
      dispatch(endLoader())
      showMessage({
        message: "Demande d'aide envoyé",
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
