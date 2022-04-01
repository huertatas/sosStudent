import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxTest() {
  const counterState = useSelector(state => state.counter)
  const dispatch = useDispatch()
  console.log(
    '🚀 ~ file: reduxTest.js ~ line 7 ~ reduxTest ~ counterState',
    counterState
  )
  return (
    <SafeAreaView>
    <View>
      <Text>{counterState.counterValue}</Text>
      <Button title='+' onPress={() => dispatch(incrementCounter(5))}>
        +
      </Button>
      <Button title='-' onPress={() => dispatch(decrementCounter())}>
        -
      </Button>
    </View>
    </SafeAreaView>
  )
}
