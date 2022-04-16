import React from 'react'
import styled from 'styled-components'
import { ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

export default function Loader() {
  const theme = useSelector(state => state.colors.colorTheme)

  return (
    <ViewLoader>
      <ActivityIndicator
        size='large'
        color={theme.lightTextColor}
      ></ActivityIndicator>
    </ViewLoader>
  )
}

const ViewLoader = styled.View`
  z-index: 3;
  elevation: 3;
  background: ${props => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
