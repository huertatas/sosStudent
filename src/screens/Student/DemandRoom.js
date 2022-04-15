import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import SubmitButton from '../../components/ButtonWide'
import { useDispatch, useSelector } from 'react-redux'
import { createNotif } from '../../actions/notif'
import Header from '../../components/Header'

const DemandRoom = ({ route, navigation }) => {
  const roomId = route.params.roomId
  const dispatch = useDispatch()
  const nameUser = useSelector(state => state.login.userInfo.custom_role)
  console.log(
    '🚀 ~ file: DemandRoom.js ~ line 14 ~ DemandRoom ~ userInfo',
    nameUser
  )
  console.log(
    '🚀 ~ file: DemandRoom.js ~ line 10 ~ DemandRoom ~ roomId',
    roomId
  )
  const [input, setInput] = useState('')
  const handleInputChange = newValue => setInput(newValue)

  const createNotifRoom = () => {
    dispatch(createNotif(roomId, { name: nameUser, message: input }))
  }

  useEffect(() => {
    if (input) console.log(`🚧👷 New value for input : ${input}`)
  }, [input])

  return (
    <SafeAreaView>
      <Container>
        <Header title='demand room' navigation={navigation} />
        <TextInput
          value={input}
          onChangeValue={setInput}
          placeholder={'Enter a short description...'}
          multiline={true}
          numberOfLines={3}
        />
        <SubmitButton textButton={'Add to list'} button={createNotifRoom} />
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
