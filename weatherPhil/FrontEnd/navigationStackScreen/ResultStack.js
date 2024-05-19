import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCoordinates } from './fonctions.js';
import { blockStyle } from '../navigation/navigationStyle.js'

console.log("je suis dans le ResultStack.js");

export function ResultStack() {
  const route = useRoute();
  const { city } = route.params;

  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCoordinates = async () => {
      try {
        const result = await getCoordinates(city) ;

        //JSON.parse(= transforme la chaine de caractère en objet
        const objResult = JSON.parse(JSON.stringify(result))

        if (isMounted) {
          setCoordinates(objResult);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      }
    };

    fetchCoordinates();

    return () => {
      isMounted = false; // Arrêter les mises à jour si le composant est démonté
    };
  }, [city]);
//revoir le rôle de 'N/A'
let dateGenerated = 'N/A';
let temperature = 'N/A';
let windSpeed = 'N/A';

if (coordinates) {
  dateGenerated = coordinates.dateGenerated || 'N/A'; // Date de génération
  // j'utilise l'optional chaining (notation avec les points d'interrogations) je me documenterais plus sur ça demain
  temperature = coordinates.data?.[0]?.coordinates?.[0]?.dates?.[0]?.value || 'N/A'; // Température
  windSpeed = coordinates.data?.[1]?.coordinates?.[0]?.dates?.[0]?.value || 'N/A'; // Vitesse du vent
}
  return (
    <View style = {blockStyle.centerAll}>
      {error ? (
       <ErrorLoading content = {error.message}/>
      ) : (
        <>
        {coordinates ? (<BlockReport contentA = {city} contentB = {temperature} contentC = {windSpeed}/>) : <ActivityIndicator size="150" color="#00ff00"/>}
        </>
      )}
    </View>
  );
}


function BlockReport ({contentA, contentB, contentC}) {

return (
        <>
            <View style = {blockStyle}>
                <Text style = {blockStyle.ville}> {contentA} </Text>
                <Text style = {blockStyle.temperature}> il fait {contentB} °C</Text>
                <Text style = {blockStyle.vent}>{contentC} m/s</Text>
            </View>
        </>
    )
}

function ErrorLoading ({content}) {

return (
        <>
            <View style = {blockStyle}>
                <Text> Erreur lors de la récupération des coordonnées : </Text>
                <Text style = {blockStyle.resultat}> {content}</Text>
            </View>
        </>
    )
}
function Loading (){
    return (
    <>

    </>
    )
}
 //<Text>Erreur lors de la récupération des coordonnées : {error.message}</Text>