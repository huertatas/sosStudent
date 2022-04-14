import notifee from '@notifee/react-native'

export const displayNotifeeNewNotifStudent = () => async dispatch => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel'
  })

  await notifee.displayNotification({
    title: 'Zak Help !',
    body: 'Un élève a besoin de de vous',
    android: {
      channelId
    }
  })
}

export const displayNotifeeQuitApp = () => async dispatch => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel'
  })
  await notifee.displayNotification({
    title: 'Hop hop hop',
    body: "Il y a encore des messieurs dames qui ont besoins d'aides",
    android: {
      channelId
    }
  })
}
