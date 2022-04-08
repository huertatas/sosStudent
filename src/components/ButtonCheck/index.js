import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont().then()
import { colors } from '../../helpers/colors'

export default function ButtonCheck({ textButton }) {
  return (
    <ButtonCheckStyled>
      <Ionicons name={'checkmark-outline'} size={25} color='white' />
    </ButtonCheckStyled>
  )
}

const ButtonCheckStyled = styled.TouchableOpacity`
<<<<<<< HEAD
  width: 30px;
  height: 30px;
  border-radius: ${30 / 2};
  background: green;
=======
  width: 40px;
  height: 40px;
  border-radius: ${40 / 2};
  background: ${colors.brightGreen};
>>>>>>> 32a0032ba5540a3a8186183a0cef7f12e8557aae
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
`
