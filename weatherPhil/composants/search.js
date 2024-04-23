import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import {createStackNavigator } from '@react-navigation/stack'
import {useNavigation , NavigationContainer} from '@react-navigation/native'
import {Result} from './result.js'
import {Test} from './test.js'

const styleText = {
        height : 40,
        borderColor : 'grey',
        borderRadius : 20,
        borderWidth : 2,
        textAlign : 'center',
        margin : 10
    }

export function Search () {

   const [city,setcity] = useState('')
   const navigation = useNavigation()
   const GoResult = ()=>{
    navigation.navigate('Test')
   }
    return (
    <View>
        <TextInput
                style={styleText}
                onChange = {(text)=>setcity(text)}
                value = {city}
                placeholder = {'rechercher une ville'}
                onSubmitEditing = { GoResult}
              />
    </View>
    )
}



