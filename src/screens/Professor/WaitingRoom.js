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
import { useFocusEffect } from '@react-navigation/native'

Ionicons.loadFont().then()

export default function WaitingRoom({ route }) {
  const roomId = route.params.roomId
  const rooms = useSelector(state => state.rooms.room)
  console.log(
    '🚀 ~ file: WaitingRoom.js ~ line 15 ~ WaitingRoom ~ rooms',
    rooms
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const subscribeToRoom = setInterval(() => {
      console.log('refetch')
      dispatch(getRoomById(roomId))
    }, 5000)

    // Indique comment nettoyer l'effet :
    return function unubscribeToRoom() {
      clearInterval(subscribeToRoom)
    }
  }, [])

  return (
    <SafeAreaView>
      <View>
        {/* <FirstView>
          <Ionicons name={'people'} size={30} color='black' />
          <Code>Code : </Code>
        </FirstView> */}
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
                check={true}
              />
            )
          }}
          keyExtractor={room => room.id}
        />
      </View>
    </SafeAreaView>
  )
}
const FirstView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const Code = styled.Text`
  font-size: 18px;
  margin-top: 5px;
`
const FlatNotifs = styled.FlatList``
