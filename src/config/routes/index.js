import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Logins from '../../screens/Login'
import ProfessorClassRoom from '../../screens/Professor/ClassRooms'
import ProfessorAddNewRoom from '../../screens/Professor/AddNewRoom'
import ProfessorWaitingRoom from '../../screens/Professor/WaitingRoom'
import StudentJoinRoom from '../../screens/Student/JoinRoom'
import StudentDemandProfessor from '../../screens/Student/DemandRoom'
import StudentWaitingRoom from '../../screens/Student/WaitingRoom'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen 
          name='Login' 
          component={Logins} 
        />
        <Stack.Screen
          name='ProfessorClassRoom'
          component={ProfessorClassRoom}
        />
        <Stack.Screen
          name='ProfessorAddNewRoom'
          component={ProfessorAddNewRoom}
        />
        <Stack.Screen
          name='ProfessorWaitingRoom'
          component={ProfessorWaitingRoom}
        /> 
        <Stack.Screen 
          name='StudentJoinRoom' 
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
