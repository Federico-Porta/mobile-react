import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import fonts from '../../global/fonts'
import { useFonts } from 'expo-font'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  text: {
    fontSize: 30,
    fontFamily: 'bebas'
  },
  
})
