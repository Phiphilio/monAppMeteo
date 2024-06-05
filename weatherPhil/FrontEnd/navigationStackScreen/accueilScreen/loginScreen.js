import React , {useState} from 'react';
import { TextInput,Text, Button, View,  TouchableOpacity} from 'react-native'
import {styleText} from '../../navigation/navigationStyle.js'
import {useNavigation} from '@react-navigation/native'

export function LoginStackScreen (){
const [name, setName] = useState("")
const [password, setPassword] = useState("")


const navigation = useNavigation()
const GoSignup = ()=> { navigation.navigate('sign up')}
//const GoConnected = ()=> { navigation.navigate('connected')}
const GoConnected = ()=> {
    login(name,password)

}

return(
    <View>
    <TextInput
        onChangeText = {(e) => setName(e) }
        value = {name}
        placeholder = {'name'}
        textAlign ={'left'}
        style={styleText}
    />
    <TextInput
        onChangeText = {(e) => setPassword(e) }
        value = {password}
        textAlign ={'left'}
        secureTextEntry={true}
        style={styleText}
    />
    <Button
         title = 'login'
         onPress = {GoConnected}
    />
    <TouchableOpacity onPress={GoSignup}>
         <Text> sign up </Text>
    </TouchableOpacity>
    </View>
    )
}

async function login( name, password){
    const donnees = {
        "username":name,
        "password":password
    }
    console.log("le nom :",donnees.username)
    console.log("le mdp :",donnees.password)

    try{
//le problème venait du fait que mon téléphone n'écoutait pas à son port 5000, j'ai modifé sa configuration grâce à
//cette directive donnée à l'adb : adb reverse tcp:5000 tcp:5000

    const reponse = await fetch("http://localhost:5000/routes/login/",{
        method : "POST",
        credentials: "include",
        headers : {
            "Content-Type" : "application/json"
            },
        body : JSON.stringify(donnees)
    })

        // Vérifiez le statut de la réponse
        if (!reponse.ok) {
            if (reponse.status === 401) {
                // Si le statut est 401, cela signifie une erreur d'authentification
                const errorMessage = await reponse.text(); // Récupère le message d'erreur de la réponse
                throw new Error(errorMessage);
                return errorMessage
            } else
            if (reponse.status === 500) {
             // Si le statut est 500, cela signifie une erreur du serveur
                const errorMessage = await reponse.text(); // Récupère le message d'erreur de la réponse
               throw new Error(errorMessage);
               return errorMessage
             } else {
                throw new Error(`HTTP error! status: ${reponse.status}, statusText: ${reponse.statusText}`);
             }
        }

    // l'erreur : [SyntaxError: JSON Parse error: Unexpected character: N]
    //venait du fait que je n'entrais pas les bons éléments.
    // Il y a un espace devant le mdp devweb quand je me connecte avec.

     const resultat = await reponse.json();
        console.log("Réussite :", resultat);
    }catch(error){

        console.log("voici l'erreur :",error)
        console.log("et son message :",error.message)
    }

}
