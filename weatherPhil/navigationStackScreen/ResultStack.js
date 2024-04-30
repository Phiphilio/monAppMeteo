import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCoordinates } from './fonctions.js';

export function ResultStack() {
  const route = useRoute();
  const { city } = route.params;

  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCoordinates = async () => {
      try {
        const result = await getCoordinates(city);

        if (isMounted) {
          setCoordinates(result);

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

  console.log("Coordonnées au rendu:", coordinates); // Voir si l'état change après le rendu
  //console.log("voici la temperature:",coordinates.data[0].coordinates[0].dates[0].value)
  const end = JSON.stringify(coordinates)
  const [temperature, setTemperature] = useState(null)
    setTemperature(end.data[0].coordinates[0].dates[0].value)
  console.log("voici ce que contient end:", end)
  return (
    <View>
      {error ? (
        <Text>Erreur lors de la récupération des coordonnées : {error.message}</Text>
      ) : (
        <><Text>Coordonnées pour {city}: {end ? end : 'Chargement...'}</Text>
                  <Text>la température : {end ?temperature: 'Chargement...'}</Text></>
      )}
    </View>
  );
}
