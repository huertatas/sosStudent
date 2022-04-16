import styled from 'styled-components'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { logout } from '../../actions/login'
import { displayDarkTheme, displayLightTheme } from '../../actions/colors'
import { useTranslation } from 'react-i18next'

export default function Settings({ navigation }) {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.colors.mode)
  const theme = useSelector(state => state.colors.colorTheme)
  const [themeColor, setThemeColor] = useState(false)
  const [themeLanguage, setThemeLanguage] = useState(false)

  const handleChangeTheme = () => {
    setThemeColor(!themeColor)
    if (themeColor) {
      dispatch(displayLightTheme())
    } else {
      dispatch(displayDarkTheme())
    }
  }

  const handleChangeLanguage = () => {
    setThemeLanguage(!themeLanguage)
    if (themeLanguage) {
      i18n.changeLanguage('fr')
    } else {
      i18n.changeLanguage('en')
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    navigation.navigate('Login')
  }

  useEffect(() => {
    if (themeMode !== 'light') {
      setThemeColor(true)
    }
    if (i18n.language === 'fr') {
      setThemeColor(true)
    }
  }, [])

  return (
    <MainView>
      <Title>{t('Logout')}</Title>
      <ButtonTouch onPress={handleLogout}>
        <Ionicons
          name={'log-out-outline'}
          color={theme.lightTextColor}
          size={30}
        />
      </ButtonTouch>
      <Title>{t('ColorTheme')}</Title>
      <ButtonTouch>
        {!themeColor && (
          <Ionicons
            name={'moon-outline'}
            color={theme.lightTextColor}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
        {themeColor && (
          <Ionicons
            name={'sunny-outline'}
            color={theme.lightTextColor}
            size={30}
            onPress={handleChangeTheme}
          />
        )}
      </ButtonTouch>
      <Title>{t('LangTheme')}</Title>
      <ButtonTouch onPress={handleChangeLanguage}>
        <Ionicons
          name={'language-outline'}
          color={theme.lightTextColor}
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
