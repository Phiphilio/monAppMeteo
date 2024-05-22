import React from 'react';
import About from "./composants/about.js"
import {SearchStack} from "./navigationStackScreen/pastScreen/searchStack.js"
import { StatusBar, Button, View} from 'react-native'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { TabBottom,TabTop, NavigationStyle, NavigationBas,Header, SearchIcon, InfoIcon, SearchStackStyle } from './navigation/navigationStyle.js'

import {createStackNavigator } from '@react-navigation/stack'

import {ResultStack} from './navigationStackScreen/pastScreen/ResultStack.js'



export default function App() {

  return (

<NavigationContainer>
      <StatusBar hidden = {true}/>
        <TabBottom.Navigator screenOptions={Header}>
            <TabBottom.Screen name = "weatherPhil" component = {TabTopScreen} options = {NavigationBas}/>
        </TabBottom.Navigator>
  </NavigationContainer>
  );
}

export function TabTopScreen (){
    return(
    <TabTop.Navigator screenOptions = {NavigationStyle}>
              <TabTop.Screen name="recherche" component = {StackScreens}  options = {SearchIcon} />
              <TabTop.Screen name="A propos" component = {About} options = {InfoIcon} />
           </TabTop.Navigator>)
}


const Stack = createStackNavigator();

export function StackScreens (){

return(
        <Stack.Navigator initialRouteName="requete" >
            <Stack.Screen name = "requete" component = {SearchStack} options ={SearchStackStyle} />
            <Stack.Screen name = "météo" component = {ResultStack}  />
        </Stack.Navigator>
)}


{/*https://www.meteomatics.com/en/api/api-tutorials/*/}