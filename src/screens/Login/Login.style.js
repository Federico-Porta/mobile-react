// Login.style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    marginTop:1
    
    
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '40%',
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.68)',
    margin: 30,
    
  },
  card: {
   
    borderRadius: 10,
    padding: 20,
    width: '100%',
    elevation: 5,
    marginTop: 50, // Ajusta la distancia desde la parte inferior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    width: '25%',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpText: {
    marginTop: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
