import { Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Colors } from '@/constants/Colors'
import Login from'./../components/Login'
import { auth } from './../configs/FirebaseConfig'

export default function Index() {

//const auth = getAuth(app);

const user=auth.currentUser;
  return (
    <View
    style={{
      flex:1,
    }}>
      {user?
      <Redirect href={'/dashboard'}/>: 
      <Login/>
      }

      
    </View>
        
  )
}


