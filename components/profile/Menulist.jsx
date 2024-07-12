import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { signOut } from 'firebase/auth';
import { auth } from './../../configs/FirebaseConfig';
//import * as firebase from 'firebase'

export default function Menulist() {
  const user=auth.currentUser;

  const menuList=[
    {
      id:1,
      name:'Manage Business',
      icon:require('./../../assets/images/managebusiness.png'),
      path:'/profilemenu/Managebusiness'
    },
    {
      id:2,
      name:'Edit Profile',
      icon:require('./../../assets/images/editprofile.png'),
      path:''
    },
    {
      id:3,
      name:'Customer Care',
      icon:require('./../../assets/images/customercare.png'),
      path:''
    },
    {
      id:4,
      name:'Sign Out',
      icon:require('./../../assets/images/signout.png'),
      path:'logout'
    }
  ]

  const router=useRouter();

  const onMenuClick=(item)=>{

    if(item.path=='logout'){

      //firebase.signOut();
      return;
    }
    router.push(item.path)
  }

  return (
    <View style={{
      marginTop:50
    }}>
      <FlatList
      data={menuList}
      numColumns={2}
      renderItem={({item,index})=>(
        <TouchableOpacity
        onPress={ ()=>onMenuClick(item)}
        style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          gap:10,
          flex:1,
          padding:10,
          borderRadius:20,
          borderWidth:1,
          borderColor:'#fff',
          margin:10
        }}>
          <Image source={item.icon}
          style={{
            width:80,
            height:80
          }}
          />
          <Text style={{
            color:'#fff',
            fontFamily:'outfit-medium',
            fontSize:16,
            flex:1
          }}>{item.name}</Text>
        </TouchableOpacity>
      )}/>
      <Text style={{
        fontFamily:'outfit',
        textAlign:'center',
        marginTop:20,
        color:'#fff'
      }}>Developed by Maloon @ 2024</Text>
    </View>
  )
}