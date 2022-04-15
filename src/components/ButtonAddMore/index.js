import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then()
import { useSelector } from 'react-redux'

let colors = {}

export default function ButtonAdd({ textButton, button }) {
  colors = useSelector(state => state.colors.colorTheme)

  return (
    <ButtonAddStyled onPress={() => button()}>
      <Ionicons name={'add-outline'} size={30} color='white' />
    </ButtonAddStyled>
  )
}

const ButtonAddStyled = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: ${50 / 2};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${colors.altColor};
`
