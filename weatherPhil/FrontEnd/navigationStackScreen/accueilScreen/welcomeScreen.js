import { Text, Button, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export function WelcomeStackScreen (){
const navigation = useNavigation()

return(
    <View>
     <Text>A</Text>
    <Button
        onPress = { ()=> { navigation.navigate('login')}}
        title = 'Access'
         />
    </View>
    )
}