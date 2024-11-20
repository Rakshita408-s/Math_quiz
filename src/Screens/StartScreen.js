import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import color from '../Utils/color';
import {vh,vw} from '../Utils/dimensions'
const StartScreen = () => {

  const navigation = useNavigation();
 
  const handleNavigation=()=>{
navigation.navigate('MainScreen')
  
}

  return (
    <View style={styles.main}>
      <View style={styles.headView}> 
      <Text style={styles.head}>Start Quiz</Text>
    
      </View>
      <TouchableOpacity onPress={handleNavigation} style={styles.button}>
         <Text style={styles.text}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen;
const styles= StyleSheet.create({
  main:{
 backgroundColor:color.primary,
 flex:1,
  justifyContent:"center",
   alignItems:'center'
  },
  headView:{
  
  },
  head:{
  fontSize:40,
  fontWeight:'800',
  textAlign:'center'
  },
  button:{
    backgroundColor:color.secondry,
    paddingVertical:vh(20),
    marginTop:vh(20),
    paddingHorizontal:vw(70),
    borderRadius:vw(10),

  },
  text:{
    textAlign:'center'
  },
  
})