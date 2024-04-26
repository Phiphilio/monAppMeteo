import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import {createStackNavigator } from '@react-navigation/stack'
import {useNavigation , NavigationContainer} from '@react-navigation/native'
import {styleText} from '../navigation/navigationStyle.js'
import {getCoordinates} from './fonctions.js'

export function SearchStack () {

   const [city,setcity] = useState('')
   const navigation = useNavigation()
   const GoResult = ()=>{
   getCoordinates(city)
   console.log("ça a marché")
    navigation.navigate('resultat')

   }
/** je ne pouvais pas appeler getCoordinates avec city en paramètre ici parce qu'à chaque fois
 que je tape une lettre dans l'input, SearchStack se relance, ce qui aurait lancé plusieurs fois la fonction getCoordinates
 pour remédier à ça, j'appelle directement la fonction au niveau du props "onSubmitEditing".
 Par contre, je n'aurais pas pu juste taper getCoordinates(city), parce que la fonction s'execute avant que onSubmitEditing ne soit rendu.
 Il faut donc passer par une fonction fléchée ()=>getCoordinates(city) parce qu'elle s'excute uniquement quand onSubmitEditing se produit
 */

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


