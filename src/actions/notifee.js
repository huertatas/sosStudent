export const displayNotifeeIfNewNotifs = (idRoom, helpMessage) => dispatch => {
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

export const displayNotifeeIfDeletedNotifs =
  (idRoom, helpMessage) => dispatch => {
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
