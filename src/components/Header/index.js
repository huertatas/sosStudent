import styled from 'styled-components'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../helpers/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Header({ title }) {
  return (
    <MainView>
     <ButtonTouch><Ionicons name={'home-outline'} color={colors.lightTextColor} size={30} /></ButtonTouch> 
        <Title>{title}</Title>
        <ButtonTouch><Ionicons name={'cog-outline'} color={colors.lightTextColor} size={30} /></ButtonTouch>       
    </MainView>
  )
}

const MainView = styled.View`
justify-content:space-around;
align-items:center;
flex-direction:row;
`
const Title = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color:${colors.lightTextColor}
  padding-left: 10px;
  text-align: center;
  padding-bottom:20px;
  align-items:center;
`
const ButtonTouch = styled.TouchableOpacity`
`