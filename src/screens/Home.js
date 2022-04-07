import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from "../Component/Title"
import SubTitle from '../Component/Subtitle'
import Cards from '../Component/Card'
export default function Home() {

  return (
    <SafeAreaView>
    <View>
    <Title title="Classroom 1"/>
    <SubTitle title="Classroom 1"/>
    <Cards/>
    </View>
    </SafeAreaView>
  )
}
