import { TextInput,Text, Button, View} from 'react-native'
import {styleText} from '../../navigation/navigationStyle.js'
export function LoginStackScreen (){

return(
    <View>
    <TextInput
    textAlign ={'left'}
        style={styleText}
    />
    <TextInput
        textAlign ={'left'}
        style={styleText}
    />
    <Button
         title = 'login'
    />
    <Text> signin </Text>
    </View>
    )
}