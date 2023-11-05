import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
    padding: 16,
  },
  listContainer: {
    flex: 1,
    marginBottom: 16,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  itemDetails: {
    flex: 1,
    marginRight: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', 
  },
  itemPrice: {
    fontSize: 16,
    color: '#555555', 
  },
  buttonContainer: {
    backgroundColor: '#2196F3', 
    borderRadius: 8,
    
    height: 48,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',

    fontSize: 18,
    fontWeight: 'bold',
  },
  totalText: {
    marginTop: 8,
    fontSize: 30,
    color: '#555555', 
  },
  confirm:{
    fontSize: 20,
  }
});

export default styles;
