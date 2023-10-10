// components/CategoryItem.style.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 2,
    width: '45%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 8,
  },
  cardContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Puedes cambiar este color según tus preferencias
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
