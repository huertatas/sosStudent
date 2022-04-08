import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import SubmitButton from '../../components/ButtonWide'
import { createRoom } from '../../actions/room'
import { useDispatch } from 'react-redux'

const AddNewRoom = () => {
  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)
  const dispatch = useDispatch()

  handleCreateNewRoom = () => {
    dispatch(createRoom(input))
  }

  useEffect(() => {
    if (input)
      console.log(`🚧👷 [New room] New value for className  : ${input}`)
  }, [input])

  return (
    <SafeAreaView>
      <Container>
        <Title title={'Add a new class'} />
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={'Class name'}
        />
        <SubmitButton textButton={'Create'} />
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

export default AddNewRoom
