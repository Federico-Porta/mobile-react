import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    margin: '5%',
    backgroundColor: '#f4f4f4', 
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,
    marginTop: 16,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff', 
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
    color: '#333',
  },
  rating: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover', 
  },
  
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  brand: {
    fontSize: 14,
    color: '#888', 
  },
});

export default styles;
