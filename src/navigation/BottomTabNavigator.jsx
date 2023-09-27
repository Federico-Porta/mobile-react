import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import StackNavigator from "./StackNavigator";
import Feather from '@expo/vector-icons/Feather'
import OrderNavigator from "./OrdersNavigator";

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator (){
    return(
        <BottomTab.Navigator initialRouteName="Shop" screenOptions={{headerShown:false, tabBarShowLabel: false }}>
            <BottomTab.Screen name='shop' component={StackNavigator} options={{
                 tabBarIcon:({focused}) => (
                <Feather name="home" size={30} color={focused ? 'black' : '#aaa'}/>
                )}}/>
                 <BottomTab.Screen name='order' component={OrderNavigator} options={{
                 tabBarIcon:({focused}) => (
                <Feather name="shopping-bag" size={30} color={focused ? 'black' : '#aaa'}/>
                )}}/>
            <BottomTab.Screen name='Cartt' component={CartNavigator} options={{
                 tabBarIcon:({focused}) => (
                <Feather name="shopping-cart" size={30} color={focused ? 'black' : '#aaa'}/>
                )}}/> 
            
        </BottomTab.Navigator>
    )
}
export default BottomTabNavigator