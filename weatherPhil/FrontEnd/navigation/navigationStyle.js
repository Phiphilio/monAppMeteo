import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';


// Mise en place des styles pour la navigation en bas

export const NoHeader = {
    headerShown : false
    }

export const NavigationBas = {
tabBarStyle: {
    backgroundColor: '#1A3D10',
  },
   tabBarShowLabel : false,
   tabBarIcon : ({color,size})=>(
       <FontAwesome name="cloud" color="white" size={16} />
       ),
}

// Mise en place des styles pour la navigation du sommet
export const NavigationStyle = {

  tabBarStyle: {
    backgroundColor: 'black',
  },
  tabBarIndicatorStyle: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 20,
  },
};

// Style pour le icône de loupe
export const SearchIcon = {
  tabBarIcon: ({ color, size }) => (
    <FontAwesome name="search" color="white" size={16} />
  ),
  tabBarShowLabel : false // pour faire disparaitre l'attribut name = "recherche"
};

// Style pour le icône d'information
export const InfoIcon = {
    tabBarIcon : ({color,size})=>(
    <FontAwesome name="info" color="white" size={16} />
    ),
    tabBarShowLabel : false

};

//style pour le searchStack
export const SearchStackStyle = {
headerShown : false

}

// style de la barre de recherche
export const styleText = {
        height : 40,
        borderColor : 'grey',
        borderRadius : 20,
        borderWidth : 2,
        textAlign : 'center',
        margin : 10
    }

// style pour les block
/** faire attention, les styles pour les composants de base de react-native ne s'appliquent pas de la même manière que
pour react-navigation avec ses screens
*/
export const blockStyle = StyleSheet.create({


    centerAll : {
        justifyContent : 'center',
        textAlign : 'center',
        alignItems : 'center'
    },
    width : 300,
    height : 320,
    borderRadius : 20,
    backgroundColor : '#1A3D10',
    margin : 40,
    alignItems : 'center',
    justifyContent : 'center',

    resultat : {
        color :'white',
        fontSize : 25,
        justifyContent : 'center',
        textAlign : 'center',
        alignItems : 'center'
    },

    ville : {
    color :'white',
    fontSize : 17
    },

    temperature : {
    color :'white',
     fontSize : 25
    },

    vent : {
    color :'white',
     fontSize : 17
    },

  })