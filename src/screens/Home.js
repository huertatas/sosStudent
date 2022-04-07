import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/title'
import SubTitle from '../components/subtitle'
import Cards from '../components/card'
import PersonCard from '../components/personCard'
import ButtonAdd from '../components/buttonAdd'
import ButtonValidity from '../components/buttonValidity'
import Image from '../components/image'
import TextInput from '../components/textInput'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const onValueChange = newValue => {
    setInputValue(newValue)
  }

  return (
    <SafeAreaView>
      <View>
        <Title title='Classroom 1' />
        <SubTitle title='Classroom 1' />
        <Cards />
        <PersonCard />
        <ButtonAdd />
        <ButtonValidity />
        <Image
          uri={
            'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY='
          }
        />
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
