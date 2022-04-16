import React from 'react'
import styled from 'styled-components'

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
  color: ${props => props.theme.darkTextColor};
  background-color: ${props => props.theme.lightTextColor};
  border: 2px solid ${props => props.theme.darkTextColor};
  border-radius: 30px;
  font-size: 20px;
`

export default TextInput
