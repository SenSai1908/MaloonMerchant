import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import TotalServedHeader from '../../components/dashboard/TotalServed/TotalServedheader'

export default function TotalServed() {
  return (
    <View style={styles.container}>
      <TotalServedHeader/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.black,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    height:"100%"
  }
})