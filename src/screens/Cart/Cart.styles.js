import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fondo en tono frío
    padding: 16,
  },
  listContainer: {
    flex: 1,
    marginBottom: 16,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF', // Fondo de las tarjetas
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3, // Sombra para un aspecto más moderno (puede variar según la plataforma)
  },
  itemDetails: {
    flex: 1,
    marginRight: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', // Texto oscuro
  },
  itemPrice: {
    fontSize: 16,
    color: '#555555', // Texto más claro
  },
  buttonContainer: {
    backgroundColor: '#2196F3', // Color de fondo para el botón
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto del botón
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalText: {
    marginTop: 8,
    fontSize: 16,
    color: '#555555', // Color del texto del total
  },
});

export default styles;
