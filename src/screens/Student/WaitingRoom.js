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
import Header from '../../components/Header'
import { colors } from '../../helpers/colors'

Ionicons.loadFont().then()

export default function StudentWaitingRoom({ route, navigation }) {
  const roomId = route.params.roomId
  const room = useSelector(state => state.rooms.room)

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
    <SafeView>
      <Views>
        <Header title='Waiting room' navigation={navigation} />
        <FlatNotifs
          data={room.attributes?.notifs.data}
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
          ListEmptyComponent={() => {
            return <TextEmpty>vide</TextEmpty>
          }}
          keyExtractor={room => room.id}
        />
        <ButtonView>
          <AddButton button={handleNavigateToCreateNotif} />
        </ButtonView>
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
  background-color: #4ca6f9;
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

const FlatNotifs = styled.FlatList``
