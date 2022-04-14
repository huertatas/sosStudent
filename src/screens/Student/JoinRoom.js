import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard'
import Title from '../../components/Title'
import { getRooms } from '../../actions/room'
import { getNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../../components/ButtonAddMore'
import styled from 'styled-components'

export default function JoinRoom({ navigation }) {
  const rooms = useSelector(state => state.rooms)
  const notifs = useSelector(state => state.notifs)

  const dispatch = useDispatch()

  const handleNavigateToWaitingRoom = id => {
    navigation.navigate('StudentWaitingRoom', {
      roomId: id
    })
  }

  useEffect(() => {
    dispatch(getRooms())
    dispatch(getNotifs())
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Title title='ClassRooms' />
        <FlatRooms
          data={rooms.rooms}
          renderItem={({ item }) => {
            return (
              <ClassCard
                title={item.attributes?.Name}
                button={() => handleNavigateToWaitingRoom(item.id)}
              />
            )
          }}
          keyExtractor={room => room.id}
        />
      </View>
    </SafeAreaView>
  )
}

const ButtonView = styled.TouchableOpacity`
  position: absolute;
  bottom: -80px;
  right: 40px;
`

const FlatRooms = styled.FlatList``
