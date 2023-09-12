import { StyleSheet } from 'react-native'
import fonts from '../../../../global/fonts'


export default styles = StyleSheet.create({
  pressable: {
    marginBottom: 10, 
  },
  cardContainer: {
    backgroundColor: '#EFEFEF', 
    padding: 10,
    margin: 5,
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    shadowColor: 'rgba(0, 0, 0, 0.2)', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 3,
    elevation: 2, 
  },
  text: {
    fontSize: 21,
    fontFamily: 'bebas',
    color: '#333', 
    fontWeight: 'bold', 
  },
})
