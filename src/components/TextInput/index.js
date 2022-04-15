import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

let colors = {}

const TextInput = ({
  value,
  onChangeValue,
  placeholder,
  multiline = false,
  secureTextEntry,
  autoCapitalize,
  numberOfLines = 1
}) => {
  colors = useSelector(state => state.colors.colorTheme)

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
  background-color: 'white';
  border: 2px solid #1e276f;
  border-radius: 30px;
  font-size: 20px;
`

export default TextInput
