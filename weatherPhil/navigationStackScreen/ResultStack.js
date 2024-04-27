import React, {useEffect, useState} from 'react';
import { StatusBar, View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {getCoordinates} from './fonctions.js'

    export function ResultStack() {
        const route = useRoute();
        const { city } = route.params; // Récupérer le paramètre 'city'

    useEffect( ()=> getCoordinates(city),
    [city])
      return (
     <View>

     <Text> il cherche la météo de {city} </Text>
     </View>

      );
    }
    function Block(){

    return (
        <View>

        </View>
    )}