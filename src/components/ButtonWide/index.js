import React from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'

export default function ButtonWide({ textButton }) {
  return (
    <ButtonWideStyled>
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
  color: ${colors.darkTextColor};
  font-size: 20px;
`
