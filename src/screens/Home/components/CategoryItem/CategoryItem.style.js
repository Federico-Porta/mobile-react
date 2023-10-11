// components/CategoryItem.style.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', 
    borderRadius: 8, 
    padding: 16,
    margin: 8, 
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
  },
  cardContent: {
    // Puedes agregar estilos específicos para el contenido de la tarjeta si es necesario
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // color del texto
  },
});

export default styles;
