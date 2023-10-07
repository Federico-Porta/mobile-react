// Login.js
import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from './Login.style'; 

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenido</Text>
      </View>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.signUpText}>No have an account</Text>
      <Pressable>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

export default Login;
