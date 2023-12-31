import { Login, Signup } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Login" screenOptions={({ route, navigation }) => ({
      headerShown: false,
     
    })}>
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
