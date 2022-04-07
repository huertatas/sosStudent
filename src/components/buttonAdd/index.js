import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then();
import { colors } from '../../helpers/colors'

export default function ButtonAdd({ textButton }) {
  return <ButtonAddStyled></ButtonAddStyled>
}

const ButtonAddStyled = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: ${50 / 2};
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
