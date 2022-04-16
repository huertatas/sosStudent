import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/Login'
import ProfessorClassRoom from '../../screens/Professor/ClassRooms'
import ProfessorAddNewRoom from '../../screens/Professor/AddNewRoom'
import ProfessorWaitingRoom from '../../screens/Professor/WaitingRoom'
import StudentJoinRoom from '../../screens/Student/JoinRoom'
import StudentDemandProfessor from '../../screens/Student/DemandRoom'
import StudentWaitingRoom from '../../screens/Student/WaitingRoom'
import Settings from '../../screens/Settings'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Loader from '../../components/Loader'

const Stack = createNativeStackNavigator()

const Routes = () => {
  const { t } = useTranslation()
  const theme = useSelector(state => state.colors.colorTheme)
  const loading = useSelector(state => state.loader.loading)

  return (
    <ThemeProvider theme={theme}>
      {loading && <Loader />}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name='Login'
            options={{
              headerShown: false
            }}
            component={Login}
          />
          <Stack.Screen
            name='ProfessorClassRoom'
            component={ProfessorClassRoom}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name='ProfessorAddNewRoom'
            component={ProfessorAddNewRoom}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='ProfessorWaitingRoom'
            component={ProfessorWaitingRoom}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='StudentJoinRoom'
            options={{ headerShown: false, gestureEnabled: false }}
            component={StudentJoinRoom}
          />
          <Stack.Screen
            name='StudentDemandProfessor'
            component={StudentDemandProfessor}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='StudentWaitingRoom'
            component={StudentWaitingRoom}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Settings'
            options={{
              title: t('Settings'),
              headerStyle: {
                backgroundColor: theme.backgroundColor
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.lightTextColor
              },
              headerTintColor: theme.lightTextColor
            }}
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes
