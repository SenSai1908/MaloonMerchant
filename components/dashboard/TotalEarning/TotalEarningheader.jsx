import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './../../../constants/Colors'
import { Octicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TotalEarningheader() {
  return (

    <View style={{
      padding: 30,
      paddingTop: 40,
      backgroundColor: Colors.PRIMARY,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20

    }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10
        }}>
        <Ionicons name="person-circle" size={50} color="#fff" />
        <View>

          <Text style={{ fontSize: 40, fontFamily: 'outfit-bold', color: '#fff' }}>Total Earning</Text>

        </View>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8
      }}>
        <Octicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder='Search...'
          style={{
            fontFamily: 'outfit',
            fontSize: 16
          }} />
      </View>
    </View>
  )
}