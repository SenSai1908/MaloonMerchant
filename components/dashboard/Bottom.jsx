import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router';

export default function Bottom() {

    const dashboardlist = [
        {
            id: 1,
            name: 'Completed Bookings',
            icon: require('./../../assets/images/completedbookings.png'),
            path: '/dashboardmenu/Completedbookings'
        },
        {
            id: 2,
            name: 'Current Bookings',
            icon: require('./../../assets/images/currentbookings.png'),
            path: '/dashboardmenu/Currentbookings'
        },
        {
            id: 3,
            name: 'Total Served',
            icon: require('./../../assets/images/served.png'),
            path: '/dashboardmenu/TotalServed'
        },
        {
            id: 4,
            name: 'Total Earning',
            icon: require('./../../assets/images/earning.png'),
            path: '/dashboardmenu/TotalEarning'
        }
    ]

    const router = useRouter();


    const onButtonClick = (item) => {
        router.push(item.path)
    }

    return (
        <View style={{
            marginTop:10
        }}>
            <FlatList
      data={dashboardlist}
      numColumns={1}
      renderItem={({item,index})=>(
        <TouchableOpacity
        onPress={ ()=>onButtonClick(item)}
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
            width:95,
            height:95
          }}
          />
          <Text style={{
            color:'#fff',
            fontFamily:'outfit-medium',
            fontSize:24,
            flex:1
          }}>{item.name}</Text>
        </TouchableOpacity>
      )}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 90,
        paddingTop: 5,
        paddingLeft: 20,
        backgroundColor: Colors.darkbrown,
        marginTop: 30,

    }
})