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
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
// )}