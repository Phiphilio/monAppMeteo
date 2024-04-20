import React , {useState} from 'react';
import {View, Text, TextInput} from "react-native";

export default function Home () {

    /*constructor (props) {
    super(props)
    this.state = {
    city:'Rouen'
    }
   }*/
   const [city,setcity] = useState('Rouen')
    return (
    <View>
        <TextInput
                style={{height:40, borderColor: 'grey', borderWidth: 5}}

                onChange = {(text)=>setcity(text)}
                value = {city}
              />
    </View>
    )
}