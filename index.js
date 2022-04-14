/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

import notifee, { EventType } from '@notifee/react-native'

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail

  console.log('passe ici')

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel'
  })

  await notifee.displayNotification({
    title: 'Hop hop hop',
    body: "Il y a encore de messieurs dames qui ont besoins d'aides",
    android: {
      channelId
    }
  })

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
    // Update external API
    await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
      method: 'POST'
    })

    // Remove the notification
    await notifee.cancelNotification(notification.id)
  }
})

AppRegistry.registerComponent(appName, () => App)
