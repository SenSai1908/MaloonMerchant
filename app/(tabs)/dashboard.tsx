import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect,useState } from 'react'
import { useNavigation } from 'expo-router'
import{ Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import  Dashboardheader  from '../../components/dashboard/Dashboardheader'
import Slider from './../../components/dashboard/Slider'
import Bottom from '../../components/dashboard/Bottom'

export default function dashboard() {
  return (
    <View style={styles.container}>
      <Dashboardheader/>

      {/* total  and current booking */}
   
      {/* total served */}
      <Bottom/>
      {/* total earning */}


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.black,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    height:"100%"
  },

  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'25%'
    
  }

})