// components/CategoryItem.style.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 30,
    paddingBottom: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  categoryImage: {
    minWidth: '80%',
    minHeight: 150,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    fontWeight: 'bold',
    color: '#333', // color del texto
  },
});

export default styles;
