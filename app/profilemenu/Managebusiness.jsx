import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Managebusinessheader from '../../components/profile/managebusiness/Managebusinessheader'

export default function Managebusiness() {
  return (
    <View style={styles.container}>
      <Managebusinessheader/>
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