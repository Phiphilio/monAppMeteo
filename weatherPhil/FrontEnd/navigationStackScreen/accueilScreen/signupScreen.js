import {useState} from 'react';
import { Text,TextInput, Button, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {styleText} from '../../navigation/navigationStyle.js'

export function SignupStackScreen (){

const [newName, setNewName]= useState("")
const [newEmail,setNewEmail]= useState("")
const [newPassword, setNewPassword]= useState("")

const navigation = useNavigation()

const GoConnected = ()=> {

    signup(newName,newPassword)
}

return(
    <View>
       <TextInput
           onChangeText = {(e) => setNewName(e) }
           value = {newName}
           placeholder = {'name'}
           textAlign ={'left'}
           style={styleText}
       />
        <TextInput
                  onChangeText = {(e) => setNewEmail(e) }
                  value = {newEmail}
                  placeholder = {'Email'}
                  textAlign ={'left'}
                  style={styleText}
              />
       <TextInput
           onChangeText = {(e) => setNewPassword(e) }
           value = {newPassword}
           textAlign ={'left'}
           secureTextEntry={true}
           style={styleText}
       />
       <Button
            title = 'inscription'
            onPress ={GoConnected}
       />
       </View>
    )
}



async function signup( name, password){
    const donnees = {
                      "username": name,
                      "password":password
                    }
    console.log("le nom :",donnees.username)
    console.log("le mdp :",donnees.password)

    try{
//le problème venait du fait que mon téléphone n'écoutait pas à son port 5000, j'ai modifé sa configuration grâce à
//cette directive donnée à l'adb : adb reverse tcp:5000 tcp:5000

    const reponse = await fetch("http://localhost:5000/routes/signup/",{
        method : "POST",
        credentials: "include",
        headers : {
            "Content-Type" : "application/json"
            },
        body : JSON.stringify(donnees)
    })

     if (!reponse.ok) {

                if (reponse.status === 400) {
                    // Si le statut est 400, cela signifie que les deux champs n'ont pas été remplies
                    const errorMessage = await reponse.text(); // Récupère le message d'erreur de la réponse
                    throw new Error(errorMessage);
                    return errorMessage
                } else
                if (reponse.status === 409) {
                // Si le statut est 409, cela signifie qu'il y a un conflit avec l'état du serveur, dans ce cas je l'utilise pour dire que le nom est déjà pris
                  const errorMessage = await reponse.text(); // Récupère le message d'erreur de la réponse
                  throw new Error(errorMessage);
                  return errorMessage
                }
                else {
                    throw new Error(`HTTP error! status: ${reponse.status}, statusText: ${reponse.statusText}`);
                 }
            }
     const resultat = await reponse.json();
        console.log("Réussite :", resultat);
    }catch(error){
        console.log("voici l'erreur :",error)
        console.log("et son message :",error.message)
    }

}
