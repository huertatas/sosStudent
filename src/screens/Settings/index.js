import styled from 'styled-components'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../helpers/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Settings({ navigation }) {
  const [themeColor, setThemeColor] = useState(false)

  const handleChangeTheme = () => {
    setThemeColor(!themeColor)
  }

  return (
    <MainView>
      <Title>Thème couleur</Title>
      <ButtonTouch>
        {!themeColor && (
          <Ionicons
            name={'moon-outline'}
            color={colors.darkBackground}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
        {themeColor && (
          <Ionicons
            name={'sunny-outline'}
            color={colors.darkBackground}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
      </ButtonTouch>
      <Title>Changer de langue</Title>
      <ButtonTouch onPress={() => navigation.navigate('Settings')}>
        <Ionicons
          name={'cog-outline'}
          color={colors.darkBackground}
          size={30}
        />
      </ButtonTouch>
    </MainView>
  )
}

const MainView = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
const Title = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color:${colors.darkBackground}
  padding-left: 10px;
  text-align: center;
  padding-bottom:20px;
  align-items:center;
`
const ButtonTouch = styled.TouchableOpacity``
