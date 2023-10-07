import { View, Text } from 'react-native'
import React, {useState} from 'react'
import AuthStackNavigator from './AuthStack'
import BottomTabNavigator from './BottomTabNavigator'
import { useSelector } from 'react-redux'


const MainNavigator = () => {

    //const [ user, setuser] = useState(null)
const user = useSelector(state => state.auth.user)
 
    return user ? <BottomTabNavigator/> : <AuthStackNavigator/>
  
}

export default MainNavigator