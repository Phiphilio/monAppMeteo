import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'


//mise en place de la navigation
export const Tab = createMaterialTopTabNavigator ()

// mise en place des styles pour la navigation
export const NavigationStyle = {
    tabBarLabelStyle: {
            fontSize: 12,
            color : "white"
            },

    tabBarStyle: {
    backgroundColor: '#1A3D10'
     },
    tabBarIndicatorStyle : {
     backgroundColor : "white",
     padding : 2,
     borderRadius : 20
     }
}