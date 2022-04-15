import axios from 'axios'
import { showMessage } from 'react-native-flash-message'

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
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}

export const deleteNotifs = idNotif => dispatch => {
  axios({
    method: 'DELETE',
    url: `https://mobilebackstrapi.herokuapp.com/api/notifs/${idNotif}`
  })
    .then(response => {
      console.log('🚀 deleting notif ===>', response)
      showMessage({
        message: 'Elève secouru',
        type: 'success'
      })
    })
    .catch(error => {
      console.log(error)
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}

export const createNotif = (idRoom, helpMessage) => dispatch => {
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
      console.log(response)
      showMessage({
        message: "Demande d'aide envoyé",
        type: 'success'
      })
    })
    .catch(error => {
      console.log(error)
      showMessage({
        message: 'Erreur réseau',
        type: 'danger'
      })
    })
}
