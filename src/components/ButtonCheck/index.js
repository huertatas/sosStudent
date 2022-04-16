import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
Ionicons.loadFont().then()

export default function ButtonCheck({ textButton, button }) {
  const theme = useSelector(state => state.colors.colorTheme)

  return (
    <ButtonCheckStyled onPress={button}>
      <Ionicons
        name={'checkmark-outline'}
        size={25}
        color={theme.lightTextColor}
      />
    </ButtonCheckStyled>
  )
}

const ButtonCheckStyled = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: ${30 / 2};
  background: ${props => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  margin-right: 10px;
`
