import styled from 'styled-components'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { logout } from '../../actions/login'

let colors = {}

export default function Settings({ navigation }) {
  const dispatch = useDispatch()
  colors = useSelector(state => state.colors.colorTheme)
  console.log('🚀 ~ file: index.js ~ line 13 ~ Settings ~ colors', colors)
  const [themeColor, setThemeColor] = useState(false)

  const handleChangeTheme = () => {
    setThemeColor(!themeColor)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigation.navigate('Login')
  }

  return (
    <MainView>
      <Title>Déconnexion</Title>
      <ButtonTouch onPress={handleLogout}>
        <Ionicons
          name={'log-out-outline'}
          color={colors.lightTextColor}
          size={30}
        />
      </ButtonTouch>
      <Title>Thème couleur</Title>
      <ButtonTouch>
        {!themeColor && (
          <Ionicons
            name={'moon-outline'}
            color={colors.lightTextColor}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
        {themeColor && (
          <Ionicons
            name={'sunny-outline'}
            color={colors.lightTextColor}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
      </ButtonTouch>
      <Title>Changer de langue</Title>
      <ButtonTouch onPress={() => navigation.navigate('Settings')}>
        <Ionicons
          name={'language-outline'}
          color={colors.lightTextColor}
          size={30}
        />
      </ButtonTouch>
    </MainView>
  )
}

console.log("stp wheshhhh", colors.backgroundColor)

const MainView = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: ${colors.backgroundColor ? colors.backgroundColor : 'white'};
  height: 100%;
`
const Title = styled.Text`
margin-top: 10px;
font-size: 25px;
font-weight: bold;
color:${colors.lightTextColor}
padding-left: 10px;
text-align: center;
padding-bottom:20px;
align-items:center;
`
const ButtonTouch = styled.TouchableOpacity``
