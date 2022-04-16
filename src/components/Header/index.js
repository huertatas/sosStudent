import styled from 'styled-components'
import { incrementCounter, decrementCounter } from '../../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Header({ title, navigation }) {
  const infoUser = useSelector(state => state.login.userInfo)

  const handleNavigateToHome = () => {
    if (infoUser.custom_role === 'student') {
      navigation.navigate('StudentJoinRoom')
    } else {
      navigation.navigate('ProfessorClassRoom')
    }
  }

  return (
    <MainView>
      <ButtonTouch onPress={handleNavigateToHome}>
        <Ionicons name='home-outline' color={'white'} size={30} />
      </ButtonTouch>
      <Title>{title}</Title>
      <ButtonTouch onPress={() => navigation.navigate('Settings')}>
        <Ionicons name={'cog-outline'} color='white' size={30} />
      </ButtonTouch>
    </MainView>
  )
}

const MainView = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`
const Title = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color:${props => props.theme.lightTextColor}
  padding-left: 10px;
  text-align: center;
  padding-bottom:20px;
  align-items:center;
`
const ButtonTouch = styled.TouchableOpacity``
