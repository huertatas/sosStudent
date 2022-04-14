import React, { useEffect } from 'react'
import Routes from './src/config/routes'
import { View } from 'react-native'
import styled from 'styled-components'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import { store } from './src/config/store'

import notifee, { AuthorizationStatus } from '@notifee/react-native'

async function requestUserPermission() {
  const settings = await notifee.requestPermission()

  if (settings.authorizationStatus) {
    console.log('User has notification permissions enabled')
  } else {
    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings)
    } else {
      console.log('User declined permissions')
    }
  }
}

useEffect(() => {
  requestUserPermission()
}, [])

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position='top' />
    </Provider>
  )
}

export default App
