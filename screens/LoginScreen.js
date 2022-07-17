import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
        });
}
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       navigation.replace('Chat');
      } else {
        navigation.canGoBack() && navigation.popToTop();
        // User is signed out
        // ...
      }
    });
    return unsubscribe
  },[]);
  return (
    <View style={styles.container}>
      <Input 
      placeholder="Enter Email"
      label="Email"
      leftIcon={{type:'material', name:'email'}} 
      value={email}
      onChangeText={text => setEmail(text)}
      />
     <Input 
      placeholder="Enter password"
      label="password"
      leftIcon={{type:'material', name:'lock'}} 
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry
      />
      <Button title="sign in" onPress={signIn} style={styles.btn} />
      <Button title="sign up" style={styles.button} onPress={()=> navigation.navigate('Register')}/>
    </View>
  )
}

export default LoginScreen
const styles = StyleSheet.create({
  btn: {
    width: 400,
    marginTop: 10,
    color: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
})
