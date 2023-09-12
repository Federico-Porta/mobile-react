import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    padding: 10, 
   
  },
  listContainer: {
    flex: 1, top: 15,
    marginVertical: 10, 
  },
  productCard: {
    backgroundColor: '#fff', 
    borderRadius: 10, 
    marginVertical: 10, 
    padding: 15, 
    shadowColor: 'rgba(0, 0, 0, 0.2)', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 3, 
    elevation: 2, 
  },
  productImage: {
    width: '100%', 
    height: 150, 
    resizeMode: 'cover', 
    marginBottom: 10, 
  },
  productTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14, 
    marginBottom: 10,
  },
})

