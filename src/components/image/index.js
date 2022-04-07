import React from 'react'
import styled from 'styled-components'

const Image = ({ uri }) => {
  return (
    <MainView>
    <AppImage
      source={{
        uri: uri
      }}
    />
    </MainView>
  )
}

const AppImage = styled.Image`
  width: 240px;
  height: 240px;
  margin: 6px;
`
const MainView = styled.View`
justify-content:center;
align-items:center;
`

export default Image
