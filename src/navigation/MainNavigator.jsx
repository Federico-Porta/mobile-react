import React, { useEffect, useState } from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopApi'
import { setCameraImage } from '../features/auth/authSlice'
import { fetchSession } from '../db'
import { setUser } from '../features/auth/authSlice'

const MainNavigator = () => {


  const {user, localId} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const {data, error, isLoading} = useGetProfileImageQuery(localId)

  useEffect(() =>{
    if(data){
      dispatch(setCameraImage(data.image))
    }
  }, [data])


  useEffect(() => {
    ;(async () => {
      try {
        const session = await fetchSession()
        //console.log('Esta es la sesion', session)
        if (session.rows.length) {
          console.log('entre')
          const user = session.rows._array[0]
          console.log(user)
          dispatch(setUser(user))
        }
      } catch (error) {
      console.log('Error en obtener ususario', error.message)
      }
    })()
  }, [])
  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator
