import React, { useState } from 'react';
import About from "./composants/about.js"
import Home from "./composants/search.js"
import {View, Text, StatusBar, TouchableOpacity } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

//mise en place de la navigation
const Tab = createMaterialTopTabNavigator ()
// mise en place des styles pour la navigation
const NavigationStyle = {
    tabBarLabelStyle: {
            fontSize: 12,
            color : "white"
            },

    tabBarStyle: {
    backgroundColor: '#1A3D10'
     },
    tabBarIndicatorStyle : {
     backgroundColor : "purple"
     }
}
export default function App() {


  return (
  <NavigationContainer>
      <StatusBar hidden = {true}/>
       <Tab.Navigator screenOptions = {NavigationStyle}>
          <Tab.Screen name="Home" component = {Home} />
          <Tab.Screen name="About" component = {About}/>
       </Tab.Navigator>
  </NavigationContainer>

  );
}

