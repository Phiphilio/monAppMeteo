import React from 'react';
import About from "./composants/about.js"
import Search from "./composants/search.js"
import {View, Text, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { Tab, NavigationStyle, UserIcon } from './navigation/navigationStyle.js'

export default function App() {


  return (
  <NavigationContainer>
      <StatusBar hidden = {true}/>
       <Tab.Navigator screenOptions = {NavigationStyle}>
          <Tab.Screen name="recherche" component = {Search} options = {UserIcon} />
          <Tab.Screen name="A propos" component = {About} />
       </Tab.Navigator>
  </NavigationContainer>

  );
}

