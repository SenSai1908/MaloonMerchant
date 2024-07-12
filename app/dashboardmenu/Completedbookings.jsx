import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Completedbookingsheader from '../../components/dashboard/Completedbookings/Completedbookingsheader'

export default function Completedbookings() {
  return (
    <View style={styles.container}>
      <Completedbookingsheader />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "100%"
  }
})