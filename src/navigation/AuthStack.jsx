import { Details, Home, Products } from '../screens'
import {Singup, Login} from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Singup"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
    
      })}
    >
    <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Singup" component={Singup} />
      
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
