import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

import { Colors } from './../../constants/Colors'


export default function Dashboardheader() {

  return (
    <View style={{
        padding:30,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY ,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
        
    }}
    >
      <View
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
      
      <View>

        <Text style={{fontSize:40, fontFamily:'outfit-bold', color:'#fff'}}>Profile</Text>
      
    </View>
    </View>
    
    </View>
  )
}