import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard'
import Title from '../../components/Title'
import { getRooms } from '../../actions/room'
import { getNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../../components/ButtonAddMore'
import styled from 'styled-components'

export default function Home({ navigation }) {
  const rooms = useSelector(state => state.rooms)
  const notifs = useSelector(state => state.notifs)
  console.log('🚀 ~ file: ClassRooms.js ~ line 12 ~ Home ~ notifs', notifs.notifs)
  console.log('🚀 ~ file: ClassRooms.js ~ line 10 ~ Home ~ rooms', rooms.rooms)
  const dispatch = useDispatch()

  const handleNavigateToWaitingRoom = () => {
    navigation.navigate('ProfessorWaitingRoom', {
      roomId: 2
    })
  }

  const handleNavigateToCreateRoom = () => {
    navigation.navigate('ProfessorAddNewRoom')
  }

  useEffect(() => {
    dispatch(getRooms())
    dispatch(getNotifs())
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Title title='ClassRooms' />
        <ClassCard
          title='ClassRoom1'
          button={() => handleNavigateToWaitingRoom()}
        />
        <ClassCard
          title='ClassRoom2'
          button={() => handleNavigateToWaitingRoom()}
        />
        <ButtonView>
          <AddButton button={handleNavigateToCreateRoom} />
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
