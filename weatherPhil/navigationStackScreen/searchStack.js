import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import {createStackNavigator } from '@react-navigation/stack'
import {useNavigation , NavigationContainer} from '@react-navigation/native'
import {styleText} from '../navigation/navigationStyle.js'



export function SearchStack () {

   const [city,setcity] = useState('')
   const navigation = useNavigation()
   const GoResult = ()=>{
    navigation.navigate('resultat')
   }
    return (
    <View>
        <TextInput
                style={styleText}
                onChange = {(text)=>setcity(text)}
                value = {city}
                placeholder = {'rechercher une ville'}
                onSubmitEditing = { WeatherReport}
              />
    </View>
    )
}

//envoie des requêtes à l'api de meteomatics
async function WeatherReport(){
    const login = "snowphil_phil_phil";
    const password = "61Hahp8YJe";
    // Encodage de base 64
    const credentials = btoa(`${username}:${password}`);

        try{
                const reponse = await fetch("https://api.meteomatics.com/2024-04-24T15:45:00.000+02:00/t_2m:C/49.4404591,1.0939658/json?", {

                method : "POST",
                header : {
                    'Authorization': `Basic ${credentials}`
                } })
                const report = await reponse.json
                console.log("voici la réponse :",report)
        }catch (error) {
            console.error("voici l erreur :",error)
        }

}

