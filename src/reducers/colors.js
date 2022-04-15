import { COLOR_LIGHT, COLOR_DARK } from '../actions/login'

const initialState = {
  colorTheme: {
    secondaryColor: '#03DAC6',
    backgroundColor: '#4CA6F9',
    altColor: '#212c4e',
    darkTextColor: '#000000',
    lightTextColor: '#FFFFFF'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COLOR_LIGHT:
      return {
        ...state,
        colorTheme: {
          secondaryColor: '#03DAC6',
          backgroundColor: '#4CA6F9',
          altColor: '#212c4e',
          darkTextColor: '#000000',
          lightTextColor: '#FFFFFF'
        }
      }
    case COLOR_DARK:
      return {
        ...state,
        colorTheme: {
          secondaryColor: '#03DAC6',
          backgroundColor: '#212c4e',
          altColor: '#4CA6F9',
          darkTextColor: '#000000',
          lightTextColor: '#FFFFFF'
        }
      }
    default:
      return state
  }
}
