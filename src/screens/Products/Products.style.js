import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f4f4f4', 
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,

    marginTop: 16,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff', // Fondo de la "card"
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Color del título
  },
  rating: {
    fontSize: 16,
    color: '#4CAF50', // Color del rating
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3', // Color del precio
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555', // Color de la descripción
    marginBottom: 8,
  },
  brand: {
    fontSize: 14,
    color: '#888', // Color de la marca
  },
});

export default styles;
