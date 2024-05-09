import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import {createStackNavigator } from '@react-navigation/stack'
import {useNavigation , NavigationContainer} from '@react-navigation/native'
import {styleText} from '../navigation/navigationStyle.js'


export function SearchStack () {

   const [city,setcity] = useState('')
   const navigation = useNavigation()
   const GoResult = ()=>{
   console.log("Navigating with city:", city);
    navigation.navigate('météo', {city})//passe city en paramètre pour récupérer sa valeur dans l'autre Stack
   }

    return (
    <View>
        <TextInput
                style={styleText}
                onChangeText = {(text) => setcity(text) }
                value = {city}
                placeholder = {'rechercher un pays ou une ville'}
                onSubmitEditing = {GoResult}
              />
    </View>
    )
}


