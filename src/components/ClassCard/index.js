import styled from 'styled-components'
import { SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../helpers/colors'

export default function PersonCard({ title, button }) {
  return (
    <SafeAreaView>
      <ViewCard>
        <Card onPress={button}>
          <Title>{title}</Title>
        </Card>
      </ViewCard>
    </SafeAreaView>
  )
}

const Title = styled.Text`
  font-size: 19px;
  font-weight: 500;
  align-items: center;
`
const Card = styled.TouchableOpacity`
  height: 70px;
  width: 80%;
  margin-top: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

const ViewCard = styled.View`
  justify-content: center;
  align-items: center;
`
