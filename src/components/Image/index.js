import React from 'react'
import styled from 'styled-components'
import { store } from '../../../App'

let colors = store.getState().colors.colorTheme

const Image = ({ uri }) => {
  return (
    <MainView>
    <AppImage
      source={uri}
    />
    </MainView>
  )
}

const AppImage = styled.Image`
  width: 100%;
  height: 240px;
`
const MainView = styled.View`
justify-content:center;
align-items:center;
`

export default Image
