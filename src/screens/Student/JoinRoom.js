import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInputComponent'
import SubmitButton from '../../components/ButtonWide'

const JoinRoom = () => {
  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)

  useEffect(() => {
    if (input) console.log(`🚧👷 New value for input : ${input}`)
  }, [input])

  return (
    <SafeAreaView>
      <Container>
        <Title title={'Join a class'} />
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={'Class code...'}
        />
        <SubmitButton textButton={'Submit'} />
      </Container>
    </SafeAreaView>
  )
}

const Container = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export default JoinRoom
