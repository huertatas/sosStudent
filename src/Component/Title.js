import styled from 'styled-components';
import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Titles({}) {

  return (
    <SafeAreaView>
    <View>
     <Title>Bonjour</Title>
    </View>
    </SafeAreaView>
  )
}

const Title = styled.Text`
margin-top:5px;
font-size:25px;
font-weight:500;
padding-left:10px;
text-align:center;
`
