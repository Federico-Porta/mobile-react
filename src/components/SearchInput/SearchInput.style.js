import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 15,
    width: '90%',
    paddingTop: 10,
  },
  input: {
    color: 'white',
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '80%',
    fontSize: 20,
  },
})
