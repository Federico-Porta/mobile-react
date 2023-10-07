import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from './Singup.style';
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../../services/authApi'
import { setUser } from '../../../features/auth/authSlice';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignup, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password, confirmPass)
    triggerSignup({
      email,
      password,
    })
   
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Registrate</Text>
      </View>
      <TextInput style={styles.input} placeholder="Email" value={email}
          onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password}
          onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} value={confirmPass}
          onChangeText={setConfirmPass} />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.signUpText}>Already have an account?</Text>
      <Pressable
            onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
}

export default Signup;
