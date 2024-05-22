import { Text, Button, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export function WelcomeStackScreen (){
const navigation = useNavigation()
const GoLogin = ()=> { navigation.navigate('login')}
return(
    <View>
    <Button
        onPress = {GoLogin}
        title = 'Access'
         />
    </View>
    )
}