import { Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { clearUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { deletesession, fetchSession } from '../../db';



const Header = ({ title }) => {

  const dispatch = useDispatch()
  const logout = () =>{
    dispatch(clearUser())
    deletesession()
    console.log(fetchSession())
  }
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title} </Text>
      <AntDesign 
          name="logout"
          size={24}
          onPress={logout}
        />
    
    </View>
  )
}

export default Header
