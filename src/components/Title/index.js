import styled from 'styled-components'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

let colors = {}

export default function Titles({ title }) {
  colors = useSelector(state => state.colors.colorTheme)

  return (
    <SafeAreaView>
      <View>
        <Title>{title}</Title>
      </View>
    </SafeAreaView>
  )
}

const Title = styled.Text`
  margin-top: 5px;
  font-size: 25px;
  font-weight: bold;
  color:${colors.lightTextColor}
  padding-left: 10px;
  text-align: center;
  padding-bottom:20px;
`
