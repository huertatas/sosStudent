import React, { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import styled from 'styled-components'

const Login = ({ navigation }) => {
  const [account, setAccount] = useState({})

  const handleSubmit = () => {
    navigation.navigate('ProfessorClassRoom')
    console.log(
      `[Info] User account : ${account.username}, password: ${account.password}`
    )
  }

  return (
    <Container>
      <Input
        placeholder='Username'
        onChangeText={username => setAccount({ ...account, username })}
      />
      <Input
        secureTextEntry={true}
        placeholder='Password'
        onChangeText={password => setAccount({ ...account, password })}
      />
      <Submit title='Login' onPress={handleSubmit} />
    </Container>
  )
}

const Container = styled.ScrollView``

const Input = styled.TextInput``

const Submit = styled.Button``

export default Login
