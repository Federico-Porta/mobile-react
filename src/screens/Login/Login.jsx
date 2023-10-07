// Login.js
import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { setUser } from '../../features/auth/authSlice'
import styles from './Login.style'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin, result] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password)
    triggerLogin({
      email,
      password,
    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result))
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenido nuevamente</Text>
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
    </View>
  );
};

export default Login;
