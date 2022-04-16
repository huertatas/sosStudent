import styled from 'styled-components'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { logout } from '../../actions/login'
import { displayDarkTheme, displayLightTheme } from '../../actions/colors'

export default function Settings({ navigation }) {
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.colors.mode)
  const [themeColor, setThemeColor] = useState(false)

  const handleChangeTheme = () => {
    setThemeColor(!themeColor)
    if (themeColor) {
      dispatch(displayLightTheme())
    } else {
      dispatch(displayDarkTheme())
    }
  }

  useEffect(() => {})

  const handleLogout = () => {
    dispatch(logout())
    navigation.navigate('Login')
  }

  useEffect(() => {
    if (themeMode !== 'light') {
      setThemeColor(true)
    }
  }, [])

  return (
    <MainView>
      <Title>Déconnexion</Title>
      <ButtonTouch onPress={handleLogout}>
        <Ionicons name={'log-out-outline'} color={'white'} size={30} />
      </ButtonTouch>
      <Title>Thème couleur</Title>
      <ButtonTouch>
        {!themeColor && (
          <Ionicons
            name={'moon-outline'}
            color={'white'}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
        {themeColor && (
          <Ionicons
            name={'sunny-outline'}
            color={'white'}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
      </ButtonTouch>
      <Title>Changer de langue</Title>
      <ButtonTouch onPress={() => navigation.navigate('Settings')}>
        <Ionicons name={'language-outline'} color={'white'} size={30} />
      </ButtonTouch>
    </MainView>
  )
}

const MainView = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: ${props => {
    return props.theme.backgroundColor
  }};
  height: 100%;
`
const Title = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color:${props => props.theme.lightTextColor}
  padding-left: 10px;
  text-align: center;
  padding-bottom:20px;
  align-items:center;
`
const ButtonTouch = styled.TouchableOpacity``
