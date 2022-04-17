import React, { useState, useEffect } from 'react'
import Titles from '../../components/Title'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Subtitle from '../../components/Subtitle'
import { getRoomById } from '../../actions/room'
import { deleteNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import { displayNotifeeNewNotifStudent } from '../../actions/notifee'
import Card from '../../components/Card'
import AddButton from '../../components/ButtonAddMore'
import Header from '../../components/Header'
import { useTranslation } from 'react-i18next'
import RefreshButton from '../../components/ButtonRefresh'

Ionicons.loadFont().then()

export default function StudentWaitingRoom({ route, navigation }) {
  const { t } = useTranslation()

  const roomId = route.params.roomId
  const room = useSelector(state => state.rooms.room)
  const notifee = useSelector(state => state.rooms.infoForNotifee)

  const dispatch = useDispatch()

  const handleNavigateToCreateNotif = () => {
    navigation.navigate('StudentDemandProfessor', {
      roomId: roomId
    })
  }

  const handleRefresh = () => {
    dispatch(getRoomById(roomId))
  }

  useEffect(() => {
    dispatch(getRoomById(roomId))
  }, [])

  useEffect(() => {
    if (notifee) {
      dispatch(displayNotifeeNewNotifStudent())
    }
  }, [notifee])

  return (
    <SafeView>
      <Views>
      <Header title={t('WaitingRoom')} navigation={navigation}></Header>
      <RefreshButton button={handleRefresh} />
      <FlatNotifs
        data={room.attributes?.notifs.data}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.attributes.Name}
              message={item.attributes.Message}
              button={() => dispatch(deleteNotifs(item.id))}
              check={true}
            />
          )
        }}
        ListEmptyComponent={() => {
          return <TextEmpty>{t('Empty')}</TextEmpty>
        }}
        keyExtractor={room => room.id}
      />
      </Views>
    </SafeView>
  )
}

const SafeView = styled.SafeAreaView`
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
`
const FlatNotifs = styled.FlatList``

const TextEmpty = styled.Text`
  color: ${props => props.theme.lightTextColor};
  width: 100%;
  font-size: 25px;
  text-align: center;
`
const Views = styled.View``