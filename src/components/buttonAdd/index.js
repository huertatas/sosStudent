import React from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'

export default function ButtonAdd({ textButton }) {
  return (
    <ButtonAddStyled>
      <TextButtonAdd>+</TextButtonAdd>
    </ButtonAddStyled>
  )
}

const ButtonAddStyled = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: ${50 / 2};
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

const TextButtonAdd = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 800;
  margin: 0px;
`
