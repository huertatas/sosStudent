export const COLOR_LIGHT = 'COLOR_LIGHT'
export const COLOR_DARK = 'COLOR_DARK'

export const displayDarkTheme = payload => ({
  type: COLOR_DARK,
  payload
})

export const displayLightTheme = payload => ({
  type: COLOR_LIGHT,
  payload
})
