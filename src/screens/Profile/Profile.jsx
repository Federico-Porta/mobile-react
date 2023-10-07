import * as ImagePicker from 'expo-image-picker'
import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Profile.styles'

const Profile = () => {
  const [image, setImage] = useState(null)

  const verifyCameraPermissions = async () =>{
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted){
      alert('Sorry! You need to give permissions for camera')
      return false
  }
  return true}

  const pickImage = async () =>{
    const isCameraOK= await verifyCameraPermissions()

    if (isCameraOK){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9,16],
        base64: true,
        quality: 0.4
      })
      if(!result.canceled){
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const confirmImage = async () =>{

  }

  return (
    <View style={styles.container}>
      {image ? null : (
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar Foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <Text>Confirmar</Text>
      </Pressable>
    </View>
  )
}

export default Profile
