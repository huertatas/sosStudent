import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import SubmitButton from '../../components/ButtonWide'
import { createRoom } from '../../actions/room'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import { useTranslation } from 'react-i18next'

const AddNewRoom = ({ navigation }) => {
  const { t } = useTranslation()

  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)
  const dispatch = useDispatch()

  const handleCreateNewRoom = () => {
    dispatch(createRoom(input))
  }

  return (
    <SafeView>
      <Header title={t('AddNewRoom')} navigation={navigation} />
      <Container>
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={t('ClassName')}
        />
        <SubmitButton button={handleCreateNewRoom} textButton={t('Add')} />
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
  background: ${props => props.theme.backgroundColor};
`

const SafeView = styled.SafeAreaView`
  background: ${props => props.theme.backgroundColor};
`

export default AddNewRoom
