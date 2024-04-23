import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from 'react-native-vector-icons';

// Mise en place de la navigation
export const Tab = createMaterialTopTabNavigator();

// Mise en place des styles pour la navigation
export const NavigationStyle = {
  tabBarLabelStyle: {
    fontSize: 12,
    color: "white",
  },

  tabBarStyle: {
    backgroundColor: '#1A3D10',
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