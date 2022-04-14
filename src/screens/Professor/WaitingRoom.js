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

Ionicons.loadFont().then()

export default function WaitingRoom({ route }) {
  const roomId = route.params.roomId
  const rooms = useSelector(state => state.rooms.room)

  const dispatch = useDispatch()

  useEffect(() => {
    const subscribeToRoom = setInterval(() => {
      console.log('refetch')
      dispatch(getRoomById(roomId))
    }, 5000)

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

const FlatNotifs = styled.FlatList``
