import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    padding: 10,
    width: '95%',
    height: '80%',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    marginBottom: 10,
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },

});
