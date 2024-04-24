import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import {createStackNavigator } from '@react-navigation/stack'
import {useNavigation , NavigationContainer} from '@react-navigation/native'
import {styleText} from '../navigation/navigationStyle.js'
import { Buffer } from 'buffer'; // Importation nécessaire pour React Native


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

/** pour m'identifier https://www.meteomatics.com/en/api/request/api-requests-oauth-authentification/*/
    const username = "snowphil_phil_phil";
    const password = "61Hahp8YJe";
    // Encodage de base 64
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');

        try{
                const reponse = await fetch("https://api.meteomatics.com/2024-04-24T15:45:00.000+02:00/t_2m:C/49.4404591,1.0939658/json?", {

                method : "POST",
                headers : {
                    'Authorization': `Basic ${credentials}`,
                    'Content-Type': 'application/json'
                } })
                const report = await reponse.json()
                console.log("le statut de ma requête:",reponse.status)
                console.log("voici la reponse :",reponse)
                console.log("voici la date :",reponse.user)
                console.log("voici le report :",report)
        }catch (error) {
            console.error("voici l erreur :",error)
        }

}

