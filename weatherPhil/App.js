import React, { useState } from 'react';
import About from "./composants/about.js"
import Home from "./composants/search.js"
import {View, Text, StatusBar, TouchableOpacity } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

//mise en place de la navigation
const Tab = createMaterialTopTabNavigator ()

export default function App() {

//disoparition du statusbar (zone d'affichge du wifi)
const [hidden, setHidden] = useState(true);

const ChangeStatusBarVisibility = () => setHidden(!hidden)
  return (
  <NavigationContainer>
      <StatusBar hidden = {hidden}/>
       <Tab.Navigator>
          <Tab.Screen name="Home" component = {Home} />
          <Tab.Screen name="About" component = {About}/>
       </Tab.Navigator>
  </NavigationContainer>

  );
}

