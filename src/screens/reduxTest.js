import { View, Text, Button } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxTest({ navigation }) {
  const counterState = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>{counterState.counterValue}</Text>
      <Button title='+' onPress={() => dispatch(incrementCounter(5))}>
        +
      </Button>
      <Button title='-' onPress={() => dispatch(decrementCounter())}>
        -
      </Button>
      <Button title='Login-page' onPress={() => navigation.navigate('Login')}>
        Login page
      </Button>
    </View>
  )
}
