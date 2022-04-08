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

export const deleteNotifs = idNotif => dispatch => {
  axios({
    method: 'DELETE',
    url: `https://mobilebackstrapi.herokuapp.com/api/notifs/${idNotif}`
  })
    .then(response => {
      console.log('🚀 deleting notif ===>', response)
    })
    .catch(error => {
      console.log(error)
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
    })
    .catch(error => {
      console.log(error)
    })
}
