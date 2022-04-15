import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard'
import Title from '../../components/Title'
import { getRooms } from '../../actions/room'
import { getNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../../components/ButtonAddMore'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'
import Header from '../../components/Header'

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
    <SafeView>
      <Views>
        <Header title='Join room' navigation={navigation} />
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
          ListEmptyComponent={() => {
            return <TextEmpty>vide</TextEmpty>
          }}
          keyExtractor={room => room.id}
        />
      </Views>
    </SafeView>
  )
}

const ButtonView = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 40px;
`
const SafeView = styled.SafeAreaView`
  background-color: ${colors.lightBackground};
`
const Views = styled.View`
  height: 100%;
`

const TextEmpty = styled.Text`
  color: ${colors.lightTextColor};
  width: 100%;
  font-size: 25px;
  text-align: center;
`

const FlatRooms = styled.FlatList``
