import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

const LocationScreen = () => {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
    city: '',
    street: '',
    country: '',
    state: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });

      // Utiliza Geocoder para obtener la dirección detallada
      Geocoder.init('AIzaSyCztjZpkg8On0_xxKaNDDkUOv12KwJPBlM'); // Reemplaza con tu clave de API de geocodificación

      Geocoder.from(location.coords.latitude, location.coords.longitude)
        .then((json) => {
          const address = json.results[0].address_components;
          const city = address.find((component) =>
            component.types.includes('locality')
          ).long_name;
          const street = address.find((component) =>
            component.types.includes('route')
          ).long_name;
         
          const country = address.find((component) =>
            component.types.includes('country')
          ).long_name;
          const state = address.find((component) =>
            component.types.includes('administrative_area_level_1')
          ).long_name;

          setLocation((prevLocation) => ({
            ...prevLocation,
            city,
            street,
            country,
            state,
          }));
        })
        .catch((error) => {
          console.warn('Geocoding error:', error);
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <Text style={styles.title}>Ubicación</Text>
        {location ? (
          <View style={styles.locationInfo}>
            <Text style={styles.text}>Latitude: {location.latitude}</Text>
            <Text style={styles.text}>Longitude: {location.longitude}</Text>
            <Text style={styles.text}>Ciudad: {location.city}</Text>
            <Text style={styles.text}>Calle: {location.street}</Text>
            <Text style={styles.text}>País: {location.country}</Text>
            <Text style={styles.text}>Estado: {location.state}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Color de fondo gris claro
  },
  ticket: {
    backgroundColor: '#F0F8FF', // Color de ticket azul claro
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Texto oscuro
  },
  locationInfo: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#333', // Texto oscuro
    marginVertical: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red', // Texto rojo en caso de error
  },
};

