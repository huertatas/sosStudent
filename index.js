/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

import notifee, { AuthorizationStatus } from '@notifee/react-native'

async function requestUserPermission() {
  const settings = await notifee.requestPermission()

  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    console.log('Permission settings:', settings)
  } else {
    console.log('User declined permissions')
  }
}

AppRegistry.registerComponent(appName, () => App)
