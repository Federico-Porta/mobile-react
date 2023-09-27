
import { createNativeStackNavigator }from "@react-navigation/native-stack"
import { Home, Products, Details } from "../screens"
import { Button, View } from "react-native"

const Stack = createNativeStackNavigator()

function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={({route, navigation}) => ({headerShown:true, 
        header:()=>( <View style={{marginTop:60}}><Button onPress={()=> navigation.goBack()} title="volver"/></View>)
    
    
    })} >
            <Stack.Screen name='Home' component ={Home}/>
            <Stack.Screen name='Products' component ={Products}/>
            <Stack.Screen name='Details' component ={Details}/>
        </Stack.Navigator>
  
    )
    
}
export default StackNavigator