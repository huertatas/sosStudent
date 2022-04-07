import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import SubTitle from '../components/Subtitle'
import Cards from '../components/Card'
import PersonCard from '../components/PersonCard'
import ButtonAdd from '../components/ButtonAdd'
import ButtonValidity from '../components/ButtonValidity'
import Image from '../components/Image'
import TextInput from '../components/TextInput'
import ClassCard from '../components/ClassCard'

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
        <ClassCard/>
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
