import styled from 'styled-components'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../helpers/colors'

export default function PersonCard({ title,button }) {
  return (
    <SafeAreaView>
      <View>
        <Card onPress={button}>
          <Title>{title}</Title>
        </Card>
      </View>
    </SafeAreaView>
  )
}

const Title = styled.Text`
  font-size: 18px;
  font-weight: 300;
  align-items: center;
`
const Card = styled.TouchableOpacity`
  height: 70px;
  width: 350px;
  margin-top: 20px;
  background-color:white;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`
