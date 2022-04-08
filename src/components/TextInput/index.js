import React from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'

const TextInput = ({
  value,
  onChangeValue,
  placeholder,
  multiline = false,
  numberOfLines = 1
}) => {
  return (
    <Input
      onChangeText={onChangeValue}
      value={value}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  )
}

const Input = styled.TextInput`
  width: 80%;
  margin: 16px auto;
  padding-left: 6px;
  color: black;
  background-color: ${colors.brightWhite};
  border: 1px solid;
  border-radius: 6px;
  font-size: 20px;
`

export default TextInput
