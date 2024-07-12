import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import{ Colors } from './../../../constants/Colors'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth} from './../../../configs/FirebaseConfig'

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  //const auth = getAuth(app);

 
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  const OnSignIn=()=>{

    if(!email&&!password){
      ToastAndroid.show("Please Enter Email & Password",ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/dashboard')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,error.code);
    if(errorCode=='auth/invalid-credential'){
      ToastAndroid.show("invalid credentials",ToastAndroid.LONG);
    }
  });
  }



  return (
    <View style={styles.container}> 
      <View style={{
      color:'#000',
      padding:25,
      paddingTop:40,
      height:'100%'
      }}>
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="#fff" />       
        </TouchableOpacity>
          <Text style={{
          color:'#fff',
          fontFamily:'outfit-bold',
          fontSize:30,
          marginTop:20
        }}>Let's Sign You In</Text>
        <Text style={{
          color:Colors.wheat,
          fontFamily:'outfit',
          fontSize:30,
          marginTop:20
        }}>Welcome back!</Text>
        <Text style={{
          color:Colors.wheat,
          fontFamily:'outfit',
          fontSize:30,
          marginTop:10
        }}>We Missed You</Text>
        
        <View style={{
          marginTop:50
        }}>
          <Text style={{
            color:'#fff',
            fontFamily:'outfit',
            fontSize:17
          }}>Email</Text>
          <TextInput 
          style={styles.input}
          placeholder="Enter Email" 
          onChangeText={(value)=>setEmail(value)}>

          </TextInput>
    </View>

    <View style={{
          marginTop:20
        }}>
          <Text style={{
            color:'#fff',
            fontFamily:'outfit',
            fontSize:17
          }}>Password</Text>
          <TextInput 
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password" 
          onChangeText={(value)=>setPassword(value)}>

          </TextInput>
    </View>

    <View>
    <TouchableOpacity style={styles.button}
        onPress={OnSignIn}
      >
        <Text style={{
          color:"#fff",
          textAlign:"center",
          fontFamily:"outfit",
          fontSize:27,
        }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        padding:15,
        backgroundColor:"#fff",
        borderRadius:20,
        marginTop:'5%'
      }}
        onPress={()=>router.push('auth/sign-up')}
      >
        <Text style={{
          color:Colors.PRIMARY,
          textAlign:"center",
          fontFamily:"outfit",
          fontSize:27,
        }}>Create account</Text>
      </TouchableOpacity>
    </View>

    
        
    </View>

    

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.black,
    // marginTop:-20,
    height:"100%",
    // padding:25
  },

  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:20,
    marginTop:'10%'
  },

  input:{
    color:"#fff",
    padding:15,
    borderWidth:1,
    borderRadius:15,
    backgroundColor:Colors.burntorrange
  }

})