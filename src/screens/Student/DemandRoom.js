import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInputComponent'
import SubmitButton from '../../components/ButtonWide'

const DemandRoom = () => {
  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)

  useEffect(() => {
    if (input) console.log(`🚧👷 New value for input : ${input}`)
  }, [input])

  return (
    <SafeAreaView>
      <Container>
        <Title title={'Add a new demand '} />
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={'Enter a short description...'}
          multiline={true}
          numberOfLines={3}
        />
        <SubmitButton textButton={'Add to list'} />
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

export default DemandRoom
