// Home.style.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0', // Puedes ajustar este color de fondo según tus preferencias
  },
  listContainer: {
    padding: 16,
  },
  categoryItem: {
    width: '50%', // Esto hará que las categorías ocupen el 50% del ancho de la pantalla
    aspectRatio: 1, // Esto mantendrá las categorías cuadradas
    borderRadius: 10, // Esto agrega bordes redondeados
    overflow: 'hidden', // Esto asegura que el contenido dentro de las categorías no se desborde
    marginVertical: 8,
  },
});

export default styles;
