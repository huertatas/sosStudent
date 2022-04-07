<<<<<<< HEAD
import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
=======
import { View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../components/textInput'
>>>>>>> f700b69b259ca93c668714dcf437ea42ccf69338

export default function ReduxTest({ navigation }) {
  const [inputValue, setInputValue] = useState('')
  const onValueChange = newValue => {
    setInputValue(newValue)
  }

  return (
    <SafeAreaView>
<<<<<<< HEAD
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
=======
      <View>
        <TextInput
          placeholder='Test place holder'
          value={inputValue}
          onChangeValue={onValueChange}
        />
        <TextInput
          placeholder='Text area place holder'
          value={inputValue}
          onChangeValue={onValueChange}
          multiline={true}
          numberOfLines={5}
        />
      </View>
>>>>>>> f700b69b259ca93c668714dcf437ea42ccf69338
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
// )}