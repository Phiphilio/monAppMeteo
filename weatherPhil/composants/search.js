import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";

const styleText = {
        height : 40,
        borderColor : 'grey',
        borderWidth : 2
    }

export default function Home () {

   const [city,setcity] = useState('Rouen')
    return (
    <View>
        <TextInput
                style={styleText}

                onChange = {(text)=>setcity(text)}
                value = {city}
              />
    </View>
    )
}