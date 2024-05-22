import React from 'react';
import { StatusBar } from 'react-native'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { TabBottom,TabTop, NavigationStyle, NavigationBas,Header, SearchIcon, InfoIcon, SearchStackStyle } from './navigation/navigationStyle.js'
import {createStackNavigator } from '@react-navigation/stack'

import {WelcomeStackScreen} from './navigationStackScreen/accueilScreen/welcomeScreen'
import {LoginStackScreen} from './navigationStackScreen/accueilScreen/loginScreen'
import {SigninStackScreen} from './navigationStackScreen/accueilScreen/signinScreen'

const Stack = createStackNavigator();

export default function App() {

  return (

<NavigationContainer>
    <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name='welcome' component ={WelcomeStackScreen}/>
        <Stack.Screen name='login' component ={LoginStackScreen}/>
        <Stack.Screen name='signin' component ={SigninStackScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}



{/*https://www.meteomatics.com/en/api/api-tutorials/*/}