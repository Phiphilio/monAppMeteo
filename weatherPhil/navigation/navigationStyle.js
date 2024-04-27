import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';

// Mise en place de la navigation au sommet
export const TabTop = createMaterialTopTabNavigator();

// Mise en place de la section des favoris
export const TabBottom = createBottomTabNavigator();

// Mise en place des styles pour la navigation en bas

export const Header = {
    headerStyle: { backgroundColor: '#1A3D10' },
    headerTintColor: 'white',
     headerTitleAlign: 'center',
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