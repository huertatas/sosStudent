import styled from 'styled-components';
import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then();
export default function PersonCard({title}) {

  return (
    <SafeAreaView>
    <View>
     <Card>
     <SubCard>
     <Ionicons name={'home-outline'} size={30}/>
     <Title>Hello</Title>
     <Ionicons name={'home-outline'} size={30}/>
     </SubCard>
     </Card>
    </View>
    </SafeAreaView>
  )
}

const Title = styled.Text`
font-size:18px;
font-weight:300;
align-items:center;
`
const Card = styled.View`
height:40px;
width:350px;
background-color:white
`
const SubCard = styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center
`
