import { View, Text, TouchableOpacity, StyleSheet ,TextInput} from 'react-native'
import React, { useState} from 'react'

import { useNavigation } from '@react-navigation/native';
import {vh,vw} from '../Utils/dimensions'
import color from '../Utils/color';

const MainScreen = () => {
  const [name,setName]= useState('');
  const [questionNumber,setQuestionNumber]= useState(null);
  const [disable,setDisable] = useState(true);
  const navigation= useNavigation();
  const handlePress=(type)=>{
   
    console.log(type,'type---');
    
   navigation.navigate('HomeScreen',{type:type,name:name,questionNumber:questionNumber});
  }
  console.log(name,'name')

  return (
    <View style={styles.main}>
      <Text style={styles.head}>Select Level</Text>
      <View style={styles.inputContainer}>
     
       <TextInput style={[styles.inputField]} 
       placeholder='Type number of questions' 
       value={questionNumber}
       placeholderTextColor="black"
       onChangeText={(value)=>{value = value.replace(/[^0-9]/g, "");
        setQuestionNumber(value)
        setDisable(false)}} 
       />
       </View>
     <TouchableOpacity style={[styles. buttonC,{backgroundColor:disable?'grey':'#47777F'}]} disabled={disable} onPress={()=>handlePress('easy')}>
      <Text style={styles.text}>Easy</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles. buttonC,{backgroundColor:disable?'grey':'#47777F'}]} disabled={disable} onPress={()=>handlePress('meduim')}>
      <Text style={styles.text}>Medium</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles. buttonC,{backgroundColor:disable?'grey':'#47777F'}]} disabled={disable} onPress={()=>handlePress('hard')}>
      <Text style={styles.text}>Tough</Text>
     </TouchableOpacity>

    </View>
  )
}

export default MainScreen;
const styles= StyleSheet.create({
  main:{
    backgroundColor:color.primary,
    flex:1,
    justifyContent:'center'
  },
  buttonC:{
    backgroundColor:'#47777F',
    borderRadius:30,
    paddingVertical:vw(15),
    marginLeft:vw(20),
    marginRight:vw(20),
    margin:vh(10),
  },
  text:{
   textAlign:'center',
   fontSize:22,
   fontWeight:'600'
  },
  head:{
    textAlign:'center',
    fontSize:30,
    color:'#47777F',
    fontWeight:'800',
    marginBottom:vh(20),
  },
  inputField:{
    height: vh(30),
    marginVertical:vh(10),
    borderRadius:vw(20),
    borderWidth:2,
    marginHorizontal:vw(20),
    color:'black',
    paddingHorizontal:vw(20),
},
inputContainer:{
 
  marginLeft:vw(10),
  marginRight:vw(10),
  borderRadius:vw(10),
},
})