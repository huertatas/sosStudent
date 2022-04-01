import React from 'react'
import Routes from './src/config/routes'
import { View } from 'react-native'
import styled from 'styled-components'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import { store } from './src/config/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position='top' />
    </Provider>
  )
}

export default App
