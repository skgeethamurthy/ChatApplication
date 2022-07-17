import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";

const LoginScreen = ({navigation}) => {
  const {email, setemail} = useState('');
  const {password, setPassword} = useState('');
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
      <Button title="sign in" style={styles.button} />
      <Button title="sign up" style={styles.button} onPress={()=> navigation.navigate('Register')}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  button: {
    width: 400,
    marginTop: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
})
