import React from 'react'
import styled from 'styled-components'

const Image = ({ uri }) => {
  return (
    <AppImage
      source={{
        uri: uri
      }}
    />
  )
}

const AppImage = styled.Image`
  width: 240px;
  height: 240px;
  margin: 6px;
`

export default Image
