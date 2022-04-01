import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import reduxTest from '../../screens/reduxTest'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Redux' component={reduxTest} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
