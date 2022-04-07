import React from "react";
import styled from "styled-components";

const TextInput = ({value, onChangeValue, placeholder, multiline=false, numberOfLines=1 }) => {
  return(
    <Input
    onChangeText={onChangeValue}
    value={value}
    placeholder={placeholder}
    multiline={multiline}
    numberOfLines={numberOfLines}
  />
  );
}

const Input = styled.TextInput`
  background-color: white;
  margin: 16px auto;
  width: 350px;
  height:30px;
  font-size: 20px;
  padding-left:10px;
  color: black;
  border: 1px solid;
  border-radius: 6px;
`

export default TextInput