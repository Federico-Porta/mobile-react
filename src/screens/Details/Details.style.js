import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Fondo general
    padding: 16,
  },
  cardContainer: {
    width: '80%', // Ajusta el ancho de la tarjeta según tus necesidades
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Color del título
  },
  description: {
    width: '70%',
    top:10,
    fontSize: 16,
    marginBottom: 8,
    color: '#555', // Color de la descripción
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2196F3', // Color del precio
  },
  rating: {
    fontSize: 16,
    color: '#4CAF50', // Color del rating
    marginBottom: 8,
  },
  stock: {
    fontSize: 16,
    color: '#888', // Color del stock
    marginBottom: 8,
  },
  brand: {
    fontSize: 16,
    color: '#888', // Color de la marca
    marginBottom: 16,
  },
  button: {
    fontSize: 18,
    color: '#fff', // Color del texto del botón
    backgroundColor: '#4CAF50', // Color de fondo del botón
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
  },
  imageScrollView: {
    flexDirection: 'row', // Para desplazamiento horizontal
    marginBottom: 16,
  },
});

export default styles;
