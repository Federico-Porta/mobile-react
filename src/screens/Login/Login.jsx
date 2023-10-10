// Login.js
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, ImageBackground } from 'react-native';
import { setUser } from '../../features/auth/authSlice';
import styles from './Login.style';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authApi';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password);
    triggerLogin({
      email,
      password,
    });
    console.log(result);
    if (result.isSuccess) {
      dispatch(setUser(result));
    }
  };

  return (
    <ImageBackground
    source={require('../../../assets/nikeimages/snikers.jpg')}
    style={styles.background}
    resizeMode="cover"  
  >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bienvenido</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <Text style={styles.signUpText}>No estás registrado?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Login;
