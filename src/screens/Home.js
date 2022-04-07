import { View, Text, Button, SafeAreaView } from 'react-native'
import { incrementCounter, decrementCounter } from '../actions/counter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from "../components/Title"
import SubTitle from '../components/Subtitle'
import Cards from '../components/Card'
import PersonCard from '../components/PersonCard'
export default function Home() {

  return (
    <SafeAreaView>
    <View>
    <Title title="Classroom 1"/>
    <SubTitle title="Classroom 1"/>
    <Cards/>
    <PersonCard/>
    </View>
    </SafeAreaView>
  )
}
