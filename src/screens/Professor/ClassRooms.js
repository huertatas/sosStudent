import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard'
import Title from '../../components/Title'
import { getRooms } from '../../actions/room'
import { getNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../../components/ButtonAddMore'
import styled from 'styled-components'

export default function Home() {
  const rooms = useSelector(state => state.rooms)
  const notifs = useSelector(state => state.notifs)
  console.log('🚀 ~ file: ClassRooms.js ~ line 12 ~ Home ~ notifs', notifs)
  console.log('🚀 ~ file: ClassRooms.js ~ line 10 ~ Home ~ rooms', rooms)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRooms())
    dispatch(getNotifs())
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Title title='ClassRooms' />
        <ClassCard title='ClassRoom1' OnPress={() => console.log('click')} />
        <ClassCard title='ClassRoom2' OnPress={() => console.log('click')} />
        <ButtonView>
          <AddButton />
        </ButtonView>
      </View>
    </SafeAreaView>
  )
}

const ButtonView = styled.View`
  position: absolute;
  bottom: -80px;
  right: 40px;
`
