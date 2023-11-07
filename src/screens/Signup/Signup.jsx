import { Pressable, Text, TextInput, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Signup.styles'
import { setUser } from '../../features/auth/authSlice'; 
import { useSignUpMutation } from '../../services/authApi';
import { insertSession } from '../../db';

const Signup = ({ navigation }) => {
   const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [age, setage] = useState('')
  const [direction, setDirection] = useState('')
  const [triggerSignup, result] = useSignUpMutation()
  const dispatch = useDispatch()


  
  const onSubmit = () => {
    console.log(email, password, confirmPass,)
    triggerSignup({
      email,
      password,

    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result.data));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken,
      

      }).then(result => console.log(result)).catch(error => console.log(error.message))
    }
  };

  return (

  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Bienvenido</Text>
    </View>
      <TextInput style={styles.input} placeholder="Email" value={email}
          onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Age" value={age}
          onChangeText={setage} />
      <TextInput style={styles.input} placeholder="Direction"  value={direction}
          onChangeText={setDirection} />
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

  )
}

export default Signup