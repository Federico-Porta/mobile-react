import * as ImagePicker from 'expo-image-picker'
import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = ({ navigation }) => {
  const image = useSelector((state) => state.auth.imageCamera)
  const dispatch = useDispatch()
  const { localId } = useSelector((state) => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      alert('Sorry! You need to give permissions for the camera')
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOK = await verifyCameraPermissions()

    if (isCameraOK) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      })
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        )
      }
    }
  }

  const confirmImage = async () => {
    triggerSaveProfileImage({ image, localId })
  }

  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      ) : (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.cameraButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Tomar Foto de perfil</Text>
        </Pressable>
        <Pressable style={styles.cameraButton} onPress={confirmImage}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>¿A dónde enviamos tu pedido?</Text>
        <Pressable
          style={styles.locationButton}
          onPress={() => navigation.navigate('Location')}
        >
          <Text style={styles.locationButtonText}>Location</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Color de fondo claro
  },
  imageContainer: {
    borderRadius: 100, // Hace que la imagen sea circular
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#ccc', // Borde gris ancho
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cameraButton: {
    backgroundColor: '#3498db', // Color de botón claro y frío
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  locationContainer: {
    marginTop: 30,
  },
  locationText: {
    fontSize: 18,
    color: '#333', // Texto oscuro
  },
  locationButton: {
    backgroundColor: '#3498db', // Color de botón claro y frío
    padding: 10,
    borderRadius: 5,
  },
  locationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}

export default Profile
