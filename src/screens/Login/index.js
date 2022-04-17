import React, { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import styled from 'styled-components'
import Input from '../../components/TextInput'
import Image from '../../components/Image'
import Title from '../../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/login'
import { useFocusEffect } from '@react-navigation/native'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'

const Login = ({ navigation }) => {
  const { t } = useTranslation()

  const loginInfo = useSelector(state => state.login.userInfo)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await dispatch(login({ email, password, navigation }))
  }

  const handleNavigateToApp = () => {
    if (loginInfo.custom_role === 'student') {
      navigation.navigate('StudentJoinRoom')
    } else {
      navigation.navigate('ProfessorClassRoom')
    }
  }

  useFocusEffect(() => {
    if (Object.keys(loginInfo).length === 0) {
      return
    }
    handleNavigateToApp()
  })

  return (
    <Container>
      <Image uri={logo} />
      <Title title={t('Welcome Back 👋')} />
      <Input
        placeholder='Email...'
        autoComplete={true}
        autoCapitalize='none'
        onChangeValue={setEmail}
      />
      <Input
        placeholder='Password...'
        value={password}
        onChangeValue={setPassword}
        secureTextEntry={true}
        autoComplete={false}
        autoCapitalize='none'
      />
      <ButtonView>
        <Submit title='Login' onPress={handleSubmit}>
          <ButtonText>{t('Login')}</ButtonText>
        </Submit>
      </ButtonView>
    </Container>
  )
}

const Container = styled.View`
  background-color: ${props => props.theme.lightTextColor};
  height: 100%;
`

const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
`

const Submit = styled.TouchableOpacity`
  height: 50px;
  width: 300px;
  background-color: ${props => props.theme.altColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
const ButtonText = styled.Text`
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.lightTextColor};
`

export default Login
