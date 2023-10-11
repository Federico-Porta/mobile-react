import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  details: {
    marginTop: 8,
  },
  deleteButton: {
    marginLeft: 16,
  },
});

export default styles;
