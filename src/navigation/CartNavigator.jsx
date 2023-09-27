import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator }from "@react-navigation/native-stack"
import { cart } from "../screens"

const Stack = createNativeStackNavigator()

function CartNavigator(){
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={() =>({headerShown:false})}>
    
            <Stack.Screen name='Cart' component ={cart}/>
        </Stack.Navigator>
    )
    
}
export default CartNavigator