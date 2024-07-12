import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, query } from 'firebase/firestore'
import {db} from './../../configs/FirebaseConfig'
import { useRouter } from 'expo-router';

export default function Slider() {

    const[sliderlist,setSliderList]=useState([]);

    const slidermenu = [
      {
          id: 1,
          path: ''
      },
      {
          id: 2,
          path: ''
      }
  ]

  const router = useRouter();

  
  const onButtonClick = (item) => {
    router.push(item.path)
}

    useEffect(()=>{
        GetSliderList();
    },[]);
    const GetSliderList=async()=>{
        setSliderList([]);
        const q=query(collection(db,"Slider"));
        const querySnpshot=await getDocs(q);

        querySnpshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);

        })
    }
  return (
    <View>
      <Text style={{fontFamily:'outfit-bold',fontSize:24,padding:20, color:"#fff"}}>For You</Text>

      <FlatList
        data={sliderlist}
        horizontal={true}
        style={{paddingLeft:20, marginBottom:5}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={ ({item,index})=>(
          <TouchableOpacity onPress={ ()=>onButtonClick(item)}>
            <Image source={{uri:item.ImageUrl}}
            style={{
                width:300,
                height:150,
                borderRadius:15,
                marginRight:20
            }}/>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}