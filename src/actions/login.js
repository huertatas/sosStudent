import axios from 'axios'
export const GET_USER_TOKEN = 'GET_USER_TOKEN'

export const getUserToken = payload => ({
  type: GET_USER_TOKEN,
  payload
})

export const login = ({email, password}) => dispatch => {
  // axios({
  //   method: 'POST',
  //   url: 'https://mobilebackstrapi.herokuapp.com/api/auth/local',
  //   data: {
  //     identifier: email,
  //     password: password
  //   }
  // })
  axios.post('https://mobilebackstrapi.herokuapp.com/api/auth/local', {
    identifier: email,
    password: password
  }).then(response => dispatch(getUserToken(response)))
    .catch(error =>{console.log(`🐛🐛🐛 Error in login action:${error}`)
    console.log(`🐛🐛🐛 amil:${email} pass:${password}`)} )
}

