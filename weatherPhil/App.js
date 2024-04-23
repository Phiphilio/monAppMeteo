import React from 'react';
import About from "./composants/about.js"
import {SearchStack} from "./navigationStackScreen/searchStack.js"
import { StatusBar, Button, View} from 'react-native'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { Tab, NavigationStyle, SearchIcon, InfoIcon, SearchStackStyle } from './navigation/navigationStyle.js'

import {createStackNavigator } from '@react-navigation/stack'

import {Result} from './composants/result.js'
import {Test} from './navigationStackScreen/test.js'

const Stack = createStackNavigator();

export function StackScreens (){

return(
        <Stack.Navigator>
            <Stack.Screen name = "pierre" component = {SearchStack} options ={SearchStackStyle} />
            <Stack.Screen name = "Test" component = {Test} />
        </Stack.Navigator>
)}

export default function App() {

  return (

<NavigationContainer>
      <StatusBar hidden = {true}/>
       <Tab.Navigator screenOptions = {NavigationStyle}>
          <Tab.Screen name="recherche" component = {StackScreens}  options = {SearchIcon} />
          <Tab.Screen name="A propos" component = {About} options = {InfoIcon} />
       </Tab.Navigator>

  </NavigationContainer>
  );
}