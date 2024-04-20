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

// Style pour les icônes
export const UserIcon = {
  tabBarIcon: ({ color, size }) => (
    <FontAwesome name="MagnifiayingGlass" color="white" size={16} />
  ),
  tabBarShowLabel : false // pour faire disparaitre l'attribut name = "recherche"
};
