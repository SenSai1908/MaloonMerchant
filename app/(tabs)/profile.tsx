import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect,useState } from 'react'
import { useNavigation } from 'expo-router'
import{ Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import UserIntro from './../../components/profile/UserIntro'
import Menulist from './../../components/profile/Menulist'
import ProfileHeader from './../../components/profile/ProfileHeader'

export default function profile() {
  return (
    <View style={styles.container}>
      <ProfileHeader/>

      {/* User Info */}
      <UserIntro/>

      {/* Menu List  */}
      <Menulist/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.black,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    height:"100%",
    
  },

  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'25%'
    
  }

})