import StackNavigator from './src/navigation/StackNavigator'
import {useFonts} from 'expo-font'
import fonts from './src/global/fonts'
import {NavigationContainer} from "@react-navigation/native"
import BottomTabNavigator from './src/navigation/BottomTabNavigator'
import { Provider } from 'react-redux'
import  store  from './src/Store/Index'



export default function App() {
  const[fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded){
    return null
  }

  return ( <Provider store={store} ><NavigationContainer><BottomTabNavigator/></NavigationContainer></Provider>
  )
/*return productSelected?  (

 <Details  products={productSelected}/>) : categorySelected? (

    <Products category={categorySelected} setProductSelected={ setProductSelected} />
  ) : (
  <Home setCategorySelected={setCategorySelected} />
  )*/
}