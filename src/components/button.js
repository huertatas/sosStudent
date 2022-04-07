import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'

export default function button() {
  return (
    <buttonWide>
      <Text>button</Text>
    </buttonWide>
  )
}

const buttonWide = styled.TouchableOpacity`
  width: 70%;
  text-align: center;
  border
`

const textButtonWide = styled.Text`
  
`
