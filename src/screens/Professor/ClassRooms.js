import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard'
import Title from '../../components/Title'
import { getRooms } from '../../actions/room'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const rooms = useSelector(state => state.rooms)
  console.log('🚀 ~ file: ClassRooms.js ~ line 10 ~ Home ~ rooms', rooms)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRooms())
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Title title='ClassRooms' />
        <ClassCard title='ClassRoom1' />
        <ClassCard title='ClassRoom2' />
      </View>
    </SafeAreaView>
  )
}
