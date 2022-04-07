import React from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'

export default function ButtonAdd({ textButton }) {
  return <ButtonAddStyled></ButtonAddStyled>
}

const ButtonValidity = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${40 / 2};
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
`
