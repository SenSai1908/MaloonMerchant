import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors';

export default function Tablayout() {
  return (
    
    <Tabs
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.wheat,
      tabBarStyle: { backgroundColor: '#000' },
      
    }}>
        <Tabs.Screen name="profile"
        options={{
          tabBarLabel:"Profile",
          tabBarIcon:({color})=><Ionicons name="person" size={24} color={color}/>
        }}/>
        <Tabs.Screen name="dashboard"
        options={{
          tabBarLabel:"Dashboard",
          tabBarIcon:({color})=><AntDesign name="profile" size={24} color={color}/>
        }}/>
    </Tabs>
  )
}