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
<<<<<<< HEAD
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonCheck from '../ButtonCheck';
Ionicons.loadFont().then();
export default function Cards({title}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=> setIsActive(!isActive)}>
    <Card>
      <TitleCard> 
      <Title>Student 1</Title>
      <ButtonCheck/>
      </TitleCard>
    </Card>
    </TouchableOpacity>
    {isActive &&
    <DescriptionCard>
    <Description>Description : </Description>
    <Description>Urgent j'ai un probblème avec Strapi</Description>
    </DescriptionCard>
  }
=======
import { colors } from '../../helpers/colors'

export default function Cards({ title }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setIsActive(!isActive)}>
        <Card>
          <TitleCard>
            <Title>Student 1</Title>
            <Title2>Stud</Title2>
          </TitleCard>
        </Card>
      </TouchableOpacity>
      {isActive && (
        <DescriptionCard>
          <Description>Description : </Description>
          <Description>Urgent j'ai un probblème avec Strapi</Description>
        </DescriptionCard>
      )}
>>>>>>> 32a0032ba5540a3a8186183a0cef7f12e8557aae
    </SafeAreaView>
  )
}

const Card = styled.View`
  margin-top: 10px;
  height: 40px;
  background-color: ${colors.brightWhite};
  width: 350px;
  margin-left: 20px;
  justify-content: center;
  border-radius: 10px;
`

const TitleCard = styled.View`
<<<<<<< HEAD
flex-direction:row;
justify-content:space-between;
align-items:center;
=======
  flex-direction: row;
  justify-content: space-between;
>>>>>>> 32a0032ba5540a3a8186183a0cef7f12e8557aae
`
const DescriptionCard = styled.View`
  height: 100px;
  background-color: ${colors.brightWhite};
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
