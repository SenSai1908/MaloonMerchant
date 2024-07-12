import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Currentbookingsheader from '../../components/dashboard/Currentbookings/Currentbookingsheader'

export default function Currentbookings() {
  return (
    <View style={styles.container}>
      <Currentbookingsheader />
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