import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import SubmitButton from '../../components/ButtonWide'
import { useDispatch, useSelector } from 'react-redux'
import { createNotif } from '../../actions/notif'
import Header from '../../components/Header'
import { useTranslation } from 'react-i18next'

const DemandRoom = ({ route, navigation }) => {
  const { t } = useTranslation()

  const roomId = route.params.roomId
  const dispatch = useDispatch()
  const nameUser = useSelector(state => state.login.userInfo.custom_role)

  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)

  const createNotifRoom = () => {
    dispatch(createNotif(roomId, { name: nameUser, message: input }))
  }

  return (
    <SafeView>
      <Header title={t('AskQuestion')} navigation={navigation} />
      <Container>
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={t('AskDescription')}
          multiline={true}
          numberOfLines={3}
        />
        <SubmitButton textButton={t('Add')} button={createNotifRoom} />
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

export default DemandRoom
