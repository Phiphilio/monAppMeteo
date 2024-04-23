import React from 'react';
import { StatusBar, View, Text} from 'react-native';

export function Result() {
{console.log("le Stack.Screen aussi \n")}

  return (
 <View>
 {console.log("la fonction Result a été executé, donc tout marche \n")}
 <Text> voilà le résulte </Text>
 </View>

  );
}