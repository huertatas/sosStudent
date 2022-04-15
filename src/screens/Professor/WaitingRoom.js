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
import { colors } from '../../helpers/colors'
import Header from '../../components/Header'

Ionicons.loadFont().then()

export default function StudentWaitingRoom({ route, navigation }) {
  const roomId = route.params.roomId
  const room = useSelector(state => state.rooms.room)
  const notifee = useSelector(state => state.rooms.infoForNotifee)

  const dispatch = useDispatch()

  const handleNavigateToCreateNotif = () => {
    navigation.navigate('StudentDemandProfessor', {
      roomId: roomId
    })
  }

  useEffect(() => {
    const subscribeToRoom = setInterval(() => {
      dispatch(getRoomById(roomId))
    }, 5000)
    dispatch(getRoomById(roomId))

    return function unubscribeToRoom() {
      clearInterval(subscribeToRoom)
    }
  }, [])

  useEffect(() => {
    if (notifee) {
      dispatch(displayNotifeeNewNotifStudent())
    }
  }, [notifee])

  return (
    <SafeView>
      <Header title='Waiting room' navigation={navigation}></Header>
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
          return <TextEmpty>vide</TextEmpty>
        }}
        keyExtractor={room => room.id}
      />
    </SafeView>
  )
}

const SafeView = styled.SafeAreaView`
  background-color: ${colors.lightBackground};
  height: 100%;
`
const FlatNotifs = styled.FlatList``

const TextEmpty = styled.Text`
  color: ${colors.lightTextColor};
  width: 100%;
  font-size: 25px;
  text-align: center;
`
