import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import * as Location from 'expo-location'
import locationStyle from './location.style'
import styles from '../Details/Details.style'

const LocationScreen = () => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    console.log('useEffect location')
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      console.log('inside async function')
      if (status !== 'granted') {
        console.log('permission denied')
        setError('Permission to access location was denied')
        return
      }
      console.log('Este es mi status', status)
      let location = await Location.getCurrentPositionAsync({})
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      })
    })()
  }, [])


  return (
    <View style={styles.container}>
      <Text>ubicacion</Text>
      {location ? (
      <View>
        <Text>latitude: {location.latitude}</Text>
        <Text>longitude: {location.longitude}</Text>
      </View>) :( <View>
       <Text>{error}</Text>
      </View>
     )}
    </View>
  )
}

export default LocationScreen
