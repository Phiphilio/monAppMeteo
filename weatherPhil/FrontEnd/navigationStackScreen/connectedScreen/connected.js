import { Text, Button, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'


export function ConnectedStackScreen (){
const navigation = useNavigation()
const BackLogin = ()=> { navigation.goBack('login')}
return(
    <View>
    <TouchableOpacity onPress={BackLogin}>
    <Text></Text><Text></Text>
    <Text>connecté!!!</Text>
    </TouchableOpacity>
    </View>
    )
}