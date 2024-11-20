
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import Timer from '../Components/Timer';
import StartScreen from '../Screens/StartScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import MainScreen from '../Screens/MainScreen';
const Stack= createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
          />
         <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
          /> 
            <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
          /> 
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
          /> 
      
      <Stack.Screen
          name="Timer"
          component={Timer}
          options={{ headerShown: false }}
          /> 
            <Stack.Screen
          name="ScoreScreen"
          component={ScoreScreen}
          options={{ headerShown: false }}
          /> 
         
       
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;