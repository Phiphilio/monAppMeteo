import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";

const styleText = {
        height : 40,
        borderColor : 'grey',
        borderRadius : 20,
        borderWidth : 2,
        textAlign : 'center',
        margin : 10
    }

export default function Home () {

   const [city,setcity] = useState('')
    return (
    <View>
        <TextInput
                style={styleText}
                onChange = {(text)=>setcity(text)}
                value = {city}
                placeholder = {'Rouen'}
              />
    </View>
    )
}