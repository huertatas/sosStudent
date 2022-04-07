import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxTest({ navigation }) {
  const [inputValue, setInputValue] = useState('')
  const onValueChange = newValue => {
    setInputValue(newValue)
  }

  return (
    <SafeAreaView>
      <View>
        <Text>page test redux</Text> 
      </View>
    </SafeAreaView>
  )
}
