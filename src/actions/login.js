import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
export const DISPLAY_USER_INFO = 'DISPLAY_USER_INFO'
export const LOGOUT = 'LOGOUT'
import { setLoader, endLoader } from './loader'

export const displayUserInfo = payload => ({
  type: DISPLAY_USER_INFO,
  payload
})

export const logout = payload => ({
  type: LOGOUT,
  payload
})

export const login =
  ({ email, password, navigation }) =>
  dispatch => {
    dispatch(setLoader())
    console.log('pass')
    axios
      .post('https://mobilebackstrapi.herokuapp.com/api/auth/local', {
        identifier: email,
        password: password
      })
      .then(response => {
        dispatch(displayUserInfo(response.data.user))
        showMessage({
          message: 'Connexion réussie',
          type: 'success'
        })

        dispatch(endLoader())

        if (response.data.user.custom_role === 'student') {
          navigation.navigate('StudentJoinRoom')
        } else {
          navigation.navigate('ProfessorClassRoom')
        }
      })
      .catch(error => {
        dispatch(endLoader())
        showMessage({
          message: 'Erreur lors de la connexion',
          type: 'danger'
        })
      })
  }
