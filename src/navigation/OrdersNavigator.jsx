import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator }from "@react-navigation/native-stack"
import { Order } from "../screens"

const Stack = createNativeStackNavigator()

function OrderNavigator(){
    return(
        <Stack.Navigator initialRouteName='Order' screenOptions={() =>({headerShown:false})}>
    
            <Stack.Screen name='Order' component ={Order}/>
        </Stack.Navigator>
    )
    
}
export default OrderNavigator