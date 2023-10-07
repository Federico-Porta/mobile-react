
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import fonts from './src/global/fonts'
import store from './src/Store/Index'
import { useFonts } from 'expo-font'
import Login from './src/screens/Home/Login/Login'
import MainNavigator from './src/navigation/MainNavigator'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
   <Provider store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </Provider>
  )
}
