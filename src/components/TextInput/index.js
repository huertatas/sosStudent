import React from 'react'
import styled from 'styled-components'
import { store } from '../../../App'

let colors = store.getState().colors.colorTheme

const TextInput = ({
  value,
  onChangeValue,
  placeholder,
  multiline = false,
  secureTextEntry,
  autoCapitalize,
  numberOfLines = 1
}) => {
  return (
    <Input
      onChangeText={onChangeValue}
      value={value}
      placeholder={placeholder}
      multiline={multiline}
      autoCapitalize={autoCapitalize}
      numberOfLines={numberOfLines}
      secureTextEntry={secureTextEntry}
    />
  )
}

const Input = styled.TextInput`
  width: 80%;
  margin: 16px auto;
  padding-left: 10px;
  height: 50px;
  color: black;
  background-color: ${colors.backgroundColor};
  border: 2px solid #1e276f;
  border-radius: 30px;
  font-size: 20px;
`

export default TextInput
