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
                onSubmitEditing = {()=>getCoordinates(city)}
              />
    </View>
    )
}

async function getCoordinates (cityName) {

        try{


        const query = cityName.trim();
        const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=1`
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
          const location = data[0];
          console.log("nous sommes à ", location.address.city)
            console.log("de longitude", location.lon)
             WeatherReport(location.lat, location.lon)
        }
        }catch(error) {
          console.error("City not found", error);
        }
      }

//envoie des requêtes à l'api de meteomatics
async function WeatherReport(lat, lon){

    // les coordonnées actuelles
    const currentDate = new Date();

    // Format ISO 8601 (année-mois-jourTheure:minute:seconde)
    const formattedDate = currentDate.toISOString(); // "2024-04-25T14:45:00.000Z"

    /** pour m'identifier https://www.meteomatics.com/en/api/request/api-requests-oauth-authentification/*/
    const username = "snowphil_phil_phil";
    const password = "61Hahp8YJe";

    // Encodage de base 64
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');

    const url = `https://api.meteomatics.com/${formattedDate}/t_2m:C/${lat},${lon}/json`
        try{
                const reponse = await fetch(url, {

                method : "POST",
                headers : {
                    'Authorization': `Basic ${credentials}`,
                    'Content-Type': 'application/json'
                } })
                const report = await reponse.json()
                console.log("voici la date :",report.dateGenerated)
                console.log("voici le report :",report)
                console.log("voici la temperature :",report.data[0].coordinates[0].dates[0])
        }catch (error) {
            console.error("voici l erreur :",error)
        }

}

// source coordonnées : https://nominatim.org/release-docs/develop/api/Output/

