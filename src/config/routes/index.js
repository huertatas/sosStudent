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

const Stack = createNativeStackNavigator()

const Routes = () => {
  const theme = useSelector(state => state.colors.colorTheme)

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen
            name='ProfessorClassRoom'
            component={ProfessorClassRoom}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name='ProfessorAddNewRoom'
            component={ProfessorAddNewRoom}
          />
          <Stack.Screen
            name='ProfessorWaitingRoom'
            component={ProfessorWaitingRoom}
            options={{
              headerBackTitle: '',
              headerTintColor: 'black',
              headerTitleStyle: {
                color: 'white'
              }
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
          />
          <Stack.Screen
            name='StudentWaitingRoom'
            component={StudentWaitingRoom}
          />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes
