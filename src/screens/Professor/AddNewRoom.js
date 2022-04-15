import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import SubmitButton from '../../components/ButtonWide'
import { createRoom } from '../../actions/room'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import { store } from '../../../App'

let colors = store.getState().colors.colorTheme

const AddNewRoom = ({ navigation }) => {
  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)
  const dispatch = useDispatch()

  const handleCreateNewRoom = () => {
    dispatch(createRoom(input))
  }

  useEffect(() => {
    if (input)
      console.log(`🚧👷 [New room] New value for className  : ${input}`)
  }, [input])

  return (
    <SafeView>
      <Header title='ClassRooms' navigation={navigation} />
      <Container>
        <Title title={'Add a new class'} />
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={'Class name'}
        />
        <SubmitButton button={handleCreateNewRoom} textButton={'Create'} />
      </Container>
    </SafeView>
  )
}

const Container = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.backgroundColor};
`

const SafeView = styled.SafeAreaView`
  background: ${colors.backgroundColor};
`

export default AddNewRoom
