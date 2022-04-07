import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfessorClassRoom from '../../screens/Professor/ClassRooms';
import ProfessorAddNewRoom from '../../screens/Professor/AddNewRoom';
import ProfessorWaitingRoom from '../../screens/Professor/WaitingRoom';
import Logins from '../../screens/Login';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name='Login' component={Logins} />
        <Stack.Screen name='ProfessorClassRoom' component={ProfessorClassRoom} />
        <Stack.Screen name='ProfessorAddNewRoom' component={ProfessorAddNewRoom} />
        <Stack.Screen name='ProfessorWaitingRoom' component={ProfessorWaitingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
