import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Titles from '../../components/Title'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Subtitle from '../../components/Subtitle'
import { getRoomById } from '../../actions/room'
import { deleteNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import AddButton from '../../components/ButtonAddMore'

Ionicons.loadFont().then()

export default function StudentWaitingRoom({ route, navigation }) {
  const roomId = route.params.roomId
  const rooms = useSelector(state => state.rooms.room)

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

  return (
    <SafeAreaView>
      <View>
        <Titles title={rooms.attributes?.Name} />
        <Subtitle title='Waiting list' />
        <FlatNotifs
          data={rooms.attributes?.notifs.data}
          renderItem={({ item }) => {
            return (
              <Card
                title={item.attributes.Name}
                message={item.attributes.Message}
                button={() => dispatch(deleteNotifs(item.id))}
                check={false}
              />
            )
          }}
          keyExtractor={room => room.id}
        />
        <ButtonView>
          <AddButton button={handleNavigateToCreateNotif} />
        </ButtonView>
      </View>
    </SafeAreaView>
  )
}

const ButtonView = styled.TouchableOpacity`
  position: absolute;
  bottom: -80px;
  right: 40px;
`

const FlatNotifs = styled.FlatList``
