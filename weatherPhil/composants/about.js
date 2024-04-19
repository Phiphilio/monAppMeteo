import React from "react";
import { StyleSheet,View,Text} from "react-native";

export default function About () {

    return (

        <View style={styles.view}>
        <Text style={styles.titre}>A propos de moi</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus lobortis commodo. Fusce vel mattis orci, et ultricies enim. Quisque tempor dictum bibendum. Sed gravida congue enim vitae gravida. In facilisis eget nisi vel lobortis. </Text>

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