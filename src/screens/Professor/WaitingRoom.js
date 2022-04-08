import { View, Text, Button, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import Titles from '../../components/Title'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Subtitle from "../../components/Subtitle"
import Card from "../../components/Card"
Ionicons.loadFont().then()

export default function WaitingRoom() {
  return (
    <SafeAreaView>
      <View>
      <FirstView>
      <Ionicons name={'people'} size={30} color='black' />
      <Code>Code : </Code>
      </FirstView>
      <Titles title="Classroom 1"/>
      <Subtitle title="Waiting list"/>
      <Card/>
      <Card/>
      </View>
    </SafeAreaView>
  )
}
const FirstView = styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center
`
const Code = styled.Text`
font-size:18px;
margin-top:5px;

`
