import React, { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import styled from 'styled-components'
import Inputs from "../components/TextInput"
import Image from "../components/Image"

const Login = ({ navigation }) => {

  const handleSubmit = () => {
    navigation.navigate('ProfessorClassRoom')
   
  }

  return (
    <Container>
      <Image uri="https://edtechawesomeness.files.wordpress.com/2017/09/share-to-classroom-e1504657407631.png"/>
      <Inputs placeholder="Identifiant"/>
      <Inputs placeholder="Mot de passe"/>
      <Submit title="Se connecter" onPress={handleSubmit}/>
    </Container>
  )
}

const Container = styled.View``

const Input = styled.TextInput``

const Submit = styled.Button``

export default Login
