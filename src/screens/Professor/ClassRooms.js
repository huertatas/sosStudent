import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import ClassCard from '../../components/ClassCard'
import Title from '../../components/Title'
import { getRooms } from '../../actions/room'
import { getNotifs } from '../../actions/notif'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../../components/ButtonAddMore'
import styled from 'styled-components'
import { displayNotifeeQuitApp } from '../../actions/notifee'
import Header from '../../components/Header'
import { AppState } from 'react-native'
import notifee from '@notifee/react-native'
import { useTranslation } from 'react-i18next'

export default function Home({ navigation }) {
  const { t } = useTranslation()

  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)

  const rooms = useSelector(state => state.rooms)
  const notifs = useSelector(state => state.notifs)

  const dispatch = useDispatch()

  const handleNavigateToWaitingRoom = id => {
    navigation.navigate('ProfessorWaitingRoom', {
      roomId: id
    })
  }

  const handleNavigateToCreateRoom = () => {
    navigation.navigate('ProfessorAddNewRoom')
  }

  useEffect(() => {
    dispatch(getRooms())
    dispatch(getNotifs())
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)

      if (appState.current === 'background') {
        dispatch(displayNotifeeQuitApp())
      }
    })

    return () => {
      subscription.remove()
    }
  }, [AppState.currentState])

  return (
    <SafeView>
      <Views>
        <Header title={t('Classrooms')} navigation={navigation} />
        <FlatRooms
          data={rooms.rooms}
          renderItem={({ item }) => {
            return (
              <ClassCard
                title={item.attributes?.Name}
                button={() => handleNavigateToWaitingRoom(item.id)}
              />
            )
          }}
          ListEmptyComponent={() => {
            return <TextEmpty>{t('Empty')}</TextEmpty>
          }}
          keyExtractor={room => room.id}
        />
        <ButtonView>
          <AddButton button={handleNavigateToCreateRoom} />
        </ButtonView>
      </Views>
    </SafeView>
  )
}

const ButtonView = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 40px;
`
const SafeView = styled.SafeAreaView`
  background-color: ${props => props.theme.backgroundColor};
`
const Views = styled.View`
  height: 100%;
`

const TextEmpty = styled.Text`
  color: ${props => props.theme.lightTextColor};
  width: 100%;
  font-size: 25px;
  text-align: center;
`

const FlatRooms = styled.FlatList``
