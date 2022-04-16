import React from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
Ionicons.loadFont().then()

export default function ButtonRefresh({ textButton, button }) {
  const theme = useSelector(state => state.colors.colorTheme)

  return (
    <ContainButtonRefresh>
      <ButtonAddStyled onPress={() => button()}>
        <Ionicons
          name={'refresh-outline'}
          size={30}
          color={theme.lightTextColor}
        />
      </ButtonAddStyled>
    </ContainButtonRefresh>
  )
}

const ButtonAddStyled = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: ${45 / 2};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

const ContainButtonRefresh = styled.TouchableOpacity`
  height: 65px;
  justify-content: center;
  align-items: center;
`
