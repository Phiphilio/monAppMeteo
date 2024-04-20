import React from 'react';
import About from "./composants/about.js"
import Home from "./composants/search.js"
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator ()

export default function App() {
  return (
  <NavigationContainer>
   <Tab.Navigator>
      <Tab.Screen name="Home" component = {Home}/>
      <Tab.Screen name="About" component = {About}/>
   </Tab.Navigator>
  </NavigationContainer>

  );
}

