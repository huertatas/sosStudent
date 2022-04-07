import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from "../Component/Title"
export default function Home() {

  return (
    <SafeAreaView>
    <View>
    <Title/>
    </View>
    </SafeAreaView>
  )
}
