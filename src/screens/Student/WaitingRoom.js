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
import { useFocusEffect } from '@react-navigation/native'

Ionicons.loadFont().then()

export default function StudentWaitingRoom({ route, navigation }) {
  const roomId = route.params.roomId
  const rooms = useSelector(state => state.rooms.room)
  console.log(
    '🚀 ~ file: WaitingRoom.js ~ line 15 ~ WaitingRoom ~ rooms',
    rooms
  )
  const dispatch = useDispatch()

  const handleNavigateToCreateNotif = () => {
    navigation.navigate('StudentDemandProfessor', {
      roomId: roomId
    })
  }

  useEffect(() => {
    const subscribeToRoom = setInterval(() => {
      console.log('refetch')
      dispatch(getRoomById(roomId))
    }, 5000)
    dispatch(getRoomById(roomId))
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
