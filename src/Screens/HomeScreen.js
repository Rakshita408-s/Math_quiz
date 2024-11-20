import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react';
import Timer from '../Components/Timer'
import color from '../Utils/color';
import {vw,vh} from '../Utils/dimensions'
import { useRoute } from '@react-navigation/native'

const HomeScreen = ({navigation,routes}) => {
const [question,setQuestion]= useState('');
const [output,setOutput]= useState('');
const [option,setOption]= useState([]);
const [selectedOption,setSelectedOption]=useState(false);
const [score,setScore]= useState(0);
const [correct,setCorrect]= useState(false);
const [total ,setTotal]=useState(0);
const [disable,setDisable] = useState(true);
const [counter, setCounter] = useState(15);
routes=useRoute();
const {type,questionNumber}= routes.params;
useEffect(()=>{
    randomQuestion();
    setSelectedOption(false);
    setDisable(true);
    
  
},[selectedOption])
    const randomQuestion =()=>{

      if(type=='easy'){
        var num1 = Math.round(Math.random()*100);
        var num2 = Math.round(Math.random()*100);
        var operator= ['+','-','*','/']
        var randomOperator= operator[Math.floor(Math.random()*operator.length)];
        var result = num1 + randomOperator +num2;
        if(randomOperator=='+'){
          var outputValue = num1+num2;
      }
      else if(randomOperator=='-'){
          var outputValue = num1-num2;
      }
      else if(randomOperator=='*'){
          var outputValue = num1*num2;
      }
      else{
          var outputValue = num1/num2;
      }
      setOutput(outputValue);
      setQuestion(result);
    }
     else if(type=='medium'){
      var num1 = Math.round(Math.random()*100);
      var num2 = Math.round(Math.random()*100);
      var num3 = Math.round(Math.random()*100);
      var num4 = Math.round(Math.random()*100); 
      var operator= ['+','-','*','/']
      var randomOperator= operator[Math.floor(Math.random()*operator.length)];
      var result = num1 + randomOperator +num2 +randomOperator +num3+randomOperator +num4 ;
      if(randomOperator=='+'){
        var outputValue = num1+num2+num3-num4;
    }
    else if(randomOperator=='-'){
        var outputValue = num1-num2-num3+num4;
    }
    else if(randomOperator=='*'){
        var outputValue = num1*num2*num3*num4;
    }
    else{
        var outputValue = num1/num2/num3/num4;
    }
    setOutput(outputValue);
    setQuestion(result);
     }
     else{
      var num1 = Math.round(Math.random()*100);
      var num2 = Math.round(Math.random()*100);
      var num3 = Math.round(Math.random()*100);
      var operator= ['+','-','*','/']
      var randomOperator= operator[Math.floor(Math.random()*operator.length)];
      var result = num1 + randomOperator +num2 +randomOperator +num3 ;
      if(randomOperator=='+'){
        var outputValue = num1+num2+num3;
    }
    else if(randomOperator=='-'){
        var outputValue = num1-num2-num3;
    }
    else if(randomOperator=='*'){
        var outputValue = num1*num2*num3;
    }
    else{
        var outputValue = num1/num2/num3;
    }
    setOutput(outputValue);
    setQuestion(result);
     }


      
       
    }
    var options = [output+1,output-1,output,output-2];
    const shuffle = () => { 
        for (let i = options.length - 1; i > 0; i--) { 
          const j = Math.round(Math.floor(Math.random() * (i + 1))); 
          [options[i], options[j]] = [options[j], options[i]]; 
        } 
        return options; 
      };
   var options= shuffle();


  const check=(item)=>{
    setDisable(false);
    if(item==output){
     console.log('correct',item)
     setCorrect(true);
     console.log(selectedOption,'selectedoption')
     setScore(score+1);
     console.log('score',score);
     
    }
  }
  
  const renderItem = ({item,id})=>{
    return(
      
      <View>
        
        <TouchableOpacity onPress={()=>check(item)}style={[styles.list,styles.shadowProp]} >
        <Text style={styles.textList}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const closeModal=()=>{
    if(total < questionNumber-1){
    setSelectedOption(true),
    setTotal(total+1); 
  }
  else{
    navigation.navigate('ScoreScreen',{score:score,questionNumber:questionNumber});
  }
  }
  return (
   
    <View style={styles.main}>
      
      <View style={[styles.question,styles.shadowProp]}>
      <Text style={styles.questionText}>QUESTION</Text>
      <Text style={styles.questiontext2}>{question}=?</Text>
      </View>
      
      <View style={{marginLeft:vw(300)}}>
        <Timer/>
        </View>
       <FlatList
        data={options}
        renderItem={renderItem}
        />

    <TouchableOpacity style={[styles.next,
      {backgroundColor:disable?'grey' :'#47777F'}]} 
      onPress={closeModal} disabled={disable}>
      <Text style={styles.nextT}>Next</Text>
    </TouchableOpacity>
    </View>
  )
} 

export default HomeScreen;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'grey',
},
    list:{
        margin:2,
        backgroundColor:color.secondry,
        borderRadius:vw(10),
        padding:vw(10),
        paddingVertical:vh(20),
        marginLeft:vw(30),
        marginRight:vw(30),
        marginVertical:vh(20),
      
    },
    textList:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        fontWeight:'800',

    },
    main:{
        backgroundColor:color.primary,
        flex:1,
       
    },
    question:{
        backgroundColor:color.secondry,
        marginLeft:vw(30),
        marginRight:vw(30),
        marginTop:vh(80),
        padding:vw(10),
        borderRadius:vw(10)
    },
    questionText:{
      textAlign:"center",
      fontSize:23,
      fontWeight:'500',
      marginBottom:vh(20),
      
    },
    questiontext2:{
        fontSize:20,
        fontWeight:'800',
        textAlign:'center',
    },
    shadowProp: {
        shadowColor:'#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      modalConatiner:{
     
        marginBottom:vh(600),
      },
      modalContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -150 }, { translateY: -160 }],
        paddingLeft: vw(50),
        paddingRight: vw(50),
        paddingTop: vh(15),
        paddingBottom: vh(10),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        width: '80%',
        maxWidth: 300,
    },
    bottom:{
      marginBottom:vh(180),
      justifyContent:'center',
      alignItems:'center',
    },
    next:{
      backgroundColor:'#47777F',
      marginBottom:vh(150),
      justifyContent:'center',
      alignItems:'center',
      marginLeft:vw(50),
      marginRight:vw(50),
      paddingVertical:vh(20),
      borderRadius:vw(20),
    },
    nextT:{
      color:'white',
      fontSize:20,
      fontWeight:"600"
    }
})
