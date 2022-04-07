import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then()
import { colors } from '../../helpers/colors'

export default function ButtonValidity({ textButton }) {
  return (
    <ButtonValidityStyled>
      <Ionicons name={'checkmark-outline'} size={30} color='white' />
    </ButtonValidityStyled>
  )
}

const ButtonValidityStyled = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${40 / 2};
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
`
