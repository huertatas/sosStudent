import React, { useState } from 'react'
import styled from 'styled-components'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonCheck from '../ButtonCheck'
import { colors } from '../../helpers/colors'
Ionicons.loadFont().then()

export default function Cards({ title, message, button, check }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <SafeAreaView>
      <Card onPress={() => setIsActive(!isActive)}>
        <TitleCard>
          <Title>{title}</Title>
          {check && <ButtonCheck button={button} />}
        </TitleCard>
      </Card>
      {isActive && (
        <DescriptionCard>
          {/* <Description>Description : {description}</Description> */}
          <Description>{message}</Description>
        </DescriptionCard>
      )}
    </SafeAreaView>
  )
}

const Card = styled.TouchableOpacity`
  margin-top: 10px;
  height: 40px;
  background-color: ${colors.lightBackground};
  width: 350px;
  margin-left: 20px;
  justify-content: center;
  border-radius: 10px;
`

const TitleCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DescriptionCard = styled.View`
  height: 100px;
  background-color: ${colors.lightBackground};
  width: 350px;
  margin-left: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

const Title = styled.Text`
  font-size: 17px;
  font-weight: 300;
  align-items: center;
  margin-left: 20px;
`

const Description = styled.Text`
font-size:18px;
margin-left:20px
margin-top:2px;
`
const Title2 = styled.Text`
  font-size: 18px;
  font-weight: 300;
  align-items: center;
  margin-right: 20px;
`
