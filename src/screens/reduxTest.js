import { View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../components/textInput'

export default function ReduxTest({ navigation }) {
  const [inputValue, setInputValue] = useState('')
  const onValueChange = newValue => {
    setInputValue(newValue)
  }

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}
