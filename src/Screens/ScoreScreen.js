import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import color from '../Utils/color';
import {vh,vw} from '../Utils/dimensions'
const ScoreScreen = ({routes,navigation}) => {
    const [pass,setPass] = useState(false)
    routes=useRoute();
    const {score,name,questionNumber}= routes.params;
    if(score/questionNumber > 33.33){
        setPass(true);
    }
   
    
  return (
    <View style={styles.main}> 
      <Text style={styles.heading} >Final Score</Text>
      <View style={styles.scoreC}>
        
      <Text style={styles.score}>{score}/{questionNumber}</Text>
      
      </View>
      {pass ?<Text style={styles.pass}>Hurry Pass!</Text>:
      <Text style={styles.Fail}>Fail......</Text>
      }

      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.goBack()}>
        <Text style={styles.text}>Try Again</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default ScoreScreen;
const styles= StyleSheet.create({
    main:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:color.secondry,
    },
    scoreC:{
        backgroundColor:'#47777F',
        borderRadius:vw(130),
        padding:vw(60),
    },
    score:{
        color:'white',
        fontSize:46,
        fontWeight:'800',
    },
    heading:{
        fontSize:45,
        fontWeight:'800',
        marginBottom:vh(20)
    },
    Fail:{
        color:'red',
        fontSize:30,
        fontWeight:'800',
        marginTop:vh(20)
    },
    buttonContainer:{
        backgroundColor:'#47777F',
        paddingVertical:vh(20),
        borderRadius:20,
        marginLeft:vw(20),
        marginRight:vw(20),
        padding:vw(60),
        marginTop:vh(30),

    },
    text:{
        color:'white',
        fontSize:26,

    }
})