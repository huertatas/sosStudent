import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

let colors = {}

export default function ButtonWide({ textButton, button }) {
  colors = useSelector(state => state.colors.colorTheme)

  return (
    <ButtonWideStyled onPress={() => button()}>
      <TextButtonWide>{textButton}</TextButtonWide>
    </ButtonWideStyled>
  )
}

const ButtonWideStyled = styled.TouchableOpacity`
  width: 80%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

const TextButtonWide = styled.Text`
  color: ${colors.lightTextColor};
  font-size: 20px;
`
