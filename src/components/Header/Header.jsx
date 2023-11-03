import { Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { clearUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { deletesession } from '../../db';

const Header = ({ title }) => {

  const dispatch = useDispatch()
  const logout = () =>{
    dispatch(clearUser())
    deletesession()
  }
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
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
