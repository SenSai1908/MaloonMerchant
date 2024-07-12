import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import TotalEarningheader from '../../components/dashboard/TotalEarning/TotalEarningheader'
import TotalEarningTable from '../../components/dashboard/TotalEarning/TotalEarningTable'

export default function TotalEarning() {
  return (
    <View style={styles.container}>
      <TotalEarningheader/>


      <TotalEarningTable/>
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