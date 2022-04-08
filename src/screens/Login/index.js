import React, { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import styled from 'styled-components'
import Input from '../../components/TextInput'
import Image from '../../components/Image'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/login'

const Login = ({ navigation }) => {
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(`🚧👷 Debug  : token = ${token}`)
  }, [token])

  useEffect(() => {
    console.log(`♿️♿️ Debug  : email = ${email},  password= ${password}`)
  }, [email, password])

  const handleSubmit = () => {
    // dispatch(login({email, password}))
    navigation.navigate('ProfessorClassRoom')
  }

  return (
    <Container>
      <Image uri='https://edtechawesomeness.files.wordpress.com/2017/09/share-to-classroom-e1504657407631.png' />
      <Input placeholder='Email...' value={email} onChangeValue={setEmail} />
      <Input
        placeholder='Password...'
        value={password}
        onChangeValue={setPassword}
      />
      <Submit title='Login' onPress={handleSubmit} />
    </Container>
  )
}

const Container = styled.View``

const Submit = styled.Button``

export default Login
