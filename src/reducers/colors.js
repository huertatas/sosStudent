import { COLOR_DARK, COLOR_LIGHT } from '../actions/colors'

const initialState = {
  colorTheme: {
    secondaryColor: '#03DAC6',
    backgroundColor: '#4CA6F9',
    altColor: '#212c4e',
    darkTextColor: '#000000',
    lightTextColor: '#FFFFFF'
  },
  mode: 'light'
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
        },
        mode: 'light'
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
        },
        mode: 'dark'
      }
    default:
      return state
  }
}
