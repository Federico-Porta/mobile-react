// Login.js
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, ImageBackground, StyleSheet } from 'react-native';
import { setUser } from '../../features/auth/authSlice';
//import styles from './Login.style';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authApi';
import { insertSession } from '../../db';
import { KeyboardAvoidingView } from 'react-native';

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
   
    if (result.isSuccess) {
      dispatch(setUser(result.data));
      console.log(result.data)
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      }).then(result => console.log(result)).catch(error => console.log(error.message))
    }
  };

  return (
    <ImageBackground   source={require('../../../assets/nikeimages/fondo2.jpg')} resizeMode="cover" style={styles.image}>
    <KeyboardAvoidingView
      behavior='height'
      keyboardVerticalOffset={50}
      style={styles.screen}
    />
      <View style={styles.container}>
      <Text style={styles.title}> Just Do It</Text>
        <View>
          
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
        </View>

        <View style={styles.footer}>
        <View style={styles.button}>
        <Pressable style={styles.buttonLogin} onPress={onSubmit}>
          <Text style={styles.txtBtn2}>Log In</Text>
        </Pressable>
        <Text style={styles.signUpText}>No estás registrado?</Text>
        <Pressable style={styles.btn} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.txtBtn}>Hazlo aqui</Text>
        </Pressable>
      </View>
      </View>
      </View>
    </ImageBackground>
    );
    };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position:'relative',
    
  },
  input: {
    height: 30,
    width: '70%',
    marginLeft: '15%',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height:'100%',
  },
  title: {
    fontSize: 40,
    textAlign:"center",
    fontWeight: '800',
    marginBottom:5,
    textShadowColor: "#00000076",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 40,
    textAlign:"center",
    marginBottom: 18,
  },
  container: {
    backgroundColor:"#83828275",
   borderRadius: 30,
   paddingHorizontal: 15,
   shadowOpacity: 0.3,
   shadowRadius: 10,
   shadowColor: '#000000a9',
   shadowOffset:{width: -5,height: 5},
   marginLeft: '5%',
   minHeight :'100%',
   minWidth: '90%',
   justifyContent: 'center',
   position: 'absolute' 
  },
  footer: {
    marginTop: 35,
  },
  button: {
    marginVertical:15,
    paddingHorizontal:35,
    marginTop: 45,
  },
  buttonLogin:{
    backgroundColor:"#cc3f3f",
    borderRadius:12,
    marginBottom:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    height: 30
  },
  txtBtn:{
    fontSize: 20,
    textAlign:"center",
  
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    paddingTop:10,
  },
  txtBtn2:{
    color: "#fff",
    fontSize: 26,
    textAlign:"center",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  });

export default Login;


