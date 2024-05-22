import { Text,TextInput, Button, View, TouchableOpacity} from 'react-native'
import {styleText} from '../../navigation/navigationStyle.js'

export function SignupStackScreen (){

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
            title = 'inscription'
       />
       </View>
    )
}