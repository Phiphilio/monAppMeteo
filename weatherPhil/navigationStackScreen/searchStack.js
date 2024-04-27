import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import {createStackNavigator } from '@react-navigation/stack'
import {useNavigation , NavigationContainer} from '@react-navigation/native'
import {styleText} from '../navigation/navigationStyle.js'


export function SearchStack () {

   const [city,setcity] = useState('')
   const navigation = useNavigation()
   const GoResult = ()=>{

   console.log("ça a marché")
    navigation.navigate('météo', {city})

   }


    return (
    <View>
        <TextInput
                style={styleText}
                onChangeText = {(text) => setcity(text) }
                value = {city}
                placeholder = {'rechercher une ville'}
                onSubmitEditing = {GoResult}
              />

    </View>
    )
}


