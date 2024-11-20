import { View, Text ,TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(15);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter])
  return (
    <View>
      <Text style={styles.Text}>{counter}sec</Text>
    </View>
  )
}

export default Timer;
const styles= StyleSheet.create({
    main:{
     
    },
    Text:{
       fontSize:26,
       fontWeight:'500'
    }
})