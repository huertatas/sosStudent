import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then()
import { useSelector } from 'react-redux'

let colors = {}

export default function ButtonCheck({ textButton, button }) {
  colors = useSelector(state => state.colors.colorTheme)

  return (
    <ButtonCheckStyled onPress={button}>
      <Ionicons name={'checkmark-outline'} size={25} color='white' />
    </ButtonCheckStyled>
  )
}

const ButtonCheckStyled = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: ${30 / 2};
  background: ${colors.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  margin-right: 10px;
`
