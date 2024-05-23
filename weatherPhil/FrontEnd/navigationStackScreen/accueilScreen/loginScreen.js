import { TextInput,Text, Button, View,  TouchableOpacity} from 'react-native'
import {styleText} from '../../navigation/navigationStyle.js'
import {useNavigation} from '@react-navigation/native'

export function LoginStackScreen (){


const navigation = useNavigation()
const GoSignup = ()=> { navigation.navigate('sign up')}
const GoConnected = ()=> { navigation.navigate('connected')}

return(
    <View>
    <TextInput
    placeholder = {'name'}
        textAlign ={'left'}
        style={styleText}
    />
    <TextInput
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