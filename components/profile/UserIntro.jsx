import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { auth } from './../../configs/FirebaseConfig'

export default function UserIntro() {

  const user=auth.currentUser;

  return (
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:30
    }}>
      <Ionicons name="person-circle" size={200} color="#fff"  />
      <Text style={{color:'#fff', fontFamily:'outfit-bold', fontSize:24}}>{user?.email}</Text>
    </View>
  )
}