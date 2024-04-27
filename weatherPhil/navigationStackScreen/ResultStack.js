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
        console.log("Ce que contient result:", result);

        if (isMounted) {
          setCoordinates(result);
          console.log("Ce que contient coordinates après setCoordinates:", coordinates);
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

  return (
    <View>
      {error ? (
        <Text>Erreur lors de la récupération des coordonnées : {error.message}</Text>
      ) : (
        <Text>Coordonnées pour {city}: {coordinates ? JSON.stringify(coordinates) : 'Chargement...'}</Text>
      )}
    </View>
  );
}
