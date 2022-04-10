import axios from 'axios'
export const DISPLAY_USER_INFO = 'DISPLAY_USER_INFO'

export const displayUserInfo = payload => ({
  type: DISPLAY_USER_INFO,
  payload
})

export const login =
  ({ email, password, navigation }) =>
  dispatch => {
    axios
      .post('https://mobilebackstrapi.herokuapp.com/api/auth/local', {
        identifier: email,
        password: password
      })
      .then(response => {
        dispatch(displayUserInfo(response.data.user))

        if (response.data.user.custom_role === 'student') {
          navigation.navigate('StudentJoinRoom')
        } else {
          navigation.navigate('ProfessorClassRoom')
        }
      })
      .catch(error => {
        console.log(`🐛🐛🐛 Error in login action:${error}`)
      })
  }
