import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
  
  const router=useRouter();
  
  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
        style={{
          width:'100%',
          height:470
        }}
      />
      <View style={styles.container}>
        <Text style={{
          fontSize:35,
          fontFamily:'outfit-bold',
          textAlign:'center',
          color:'#fff',
          marginTop:10
        }}>Maloon Merchant</Text>

        <Text style={{
          fontSize:20,
          fontFamily:'outfit-medium',
          textAlign:'center',
          color:Colors.wheat,
          marginTop:20
        }}>Run your saloon from anywhere with this app. Accept payments, track sales, and manage bookings - all on your phone.</Text>
      
      <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
      >
        <Text style={{
          color:"#fff",
          textAlign:"center",
          fontFamily:"outfit",
          fontSize:27,
        }}>Sign In</Text>
      </TouchableOpacity>

      </View>

      
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:Colors.black,
      marginTop:-20,
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      height:"100%",
      padding:25
    },

    button:{
      padding:15,
      backgroundColor:Colors.PRIMARY,
      borderRadius:99,
      marginTop:'25%'
      
    }

})