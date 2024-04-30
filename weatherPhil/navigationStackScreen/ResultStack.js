import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCoordinates } from './fonctions.js';
import { blockStyle } from '../navigation/navigationStyle.js'

export function ResultStack() {
  const route = useRoute();
  const { city } = route.params;

  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

   // je stocke les valeurs
              const [dateGenerated,setDateGenerated] = useState(null)
              const [temperature, setTemperature] = useState(null)
              const [windSpeed,setWindSpeed] = useState(null)

  useEffect(() => {
    let isMounted = true;

    const fetchCoordinates = async () => {
      try {
        const result = await getCoordinates(city) ;
          const objResult = JSON.parse(JSON.stringify(result))
        if (isMounted) {
          setCoordinates(objResult);

            setDateGenerated( coordinates.dateGenerated); // Date de génération
            setTemperature( coordinates.data[0].coordinates[0].dates[0].value); // Température
            setWindSpeed(coordinates.data[1].coordinates[0].dates[0].value); // Vitesse du vent
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

  return (
    <View style = {blockStyle.centerAll}>
      {error ? (
       <ErrorLoading content = {error.message}/>
      ) : (
        <>
        {coordinates ? (<BlockReport contentA = {city} contentB = {temperature} contentC = {windSpeed}/>) : <Text>chargement...</Text>}
        </>
      )}
    </View>
  );
}


function BlockReport ({contentA, contentB, contentC}) {

return (
        <>
            <View style = {blockStyle}>
                <Text> {contentA} </Text>
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

 //<Text>Erreur lors de la récupération des coordonnées : {error.message}</Text>