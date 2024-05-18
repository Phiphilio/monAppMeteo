import React from "react";
import { StyleSheet,View,Text} from "react-native";

export default function About () {

    return (

        <View style={styles.view}>
        <Text style={styles.titre}>A propos de moi</Text>
        <Text>Cette application a été réalisée pour le plaisir, celui d`apprendre, de découvrir le code. C`est ma premiere application mobile.
        </Text>

        </View>
        )
}

const styles = StyleSheet.create({

    titre :{
        marginBottom : 20,
        fontSize : 22
        },

    view : {
    margin : 20
    }

    })