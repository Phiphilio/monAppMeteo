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
     const resultat = await reponse.json();
        console.log("Réussite :", resultat);
    }catch(error){
        console.log("voici l'erreur :",error)
        console.log("et son message :",error.message)
    }

}
