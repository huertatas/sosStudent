import { View, Text, Button, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import ClassCard from "../../components/ClassCard"
import Title from "../../components/Title"
export default function Home() {
  return (
    <SafeAreaView>
      <View>
       <Title title="ClassRooms"/>
       <ClassCard title="ClassRoom1"/>
       <ClassCard title="ClassRoom2"/>
      </View>
    </SafeAreaView>
  )
}
