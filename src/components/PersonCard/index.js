import styled from 'styled-components';
import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then();
export default function PersonCard({title}) {

  return (
    <SafeAreaView>
     <Card>
     <SubCard>
     <Ionicons style={{marginTop:5}} name={'person-circle-outline'} size={30}/>
     <Title>Hello</Title>
     <Ionicons name={'trash-outline'} style={{marginTop:5}} color="red" size={25}/>
     </SubCard>
     </Card>
    </SafeAreaView>
  )
}

const Title = styled.Text`
font-size:18px;
font-weight:300;
align-items:center;
`
const Card = styled.View`
margin-left:20px;
margin-top:20px;
border-radius:10px;
height:40px;
width:350px;
background-color:white
`
const SubCard = styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center
`
