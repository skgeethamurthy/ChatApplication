import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";

const RegisterScreen = () => {
  const { email, setemail } = useState('');
  const { name, setName } = useState('');
  const { password, setPassword } = useState('');
  const { imageURL, setImageUrl } = useState('');
  const register = () => {
    
  }
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Name"
        label="Name"
        leftIcon={{ type: 'material', name: 'badge' }}
        value={email}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder="Enter Email"
        label="Email"
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Enter password"
        label="password"
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Input
        placeholder="Enter image URL"
        label="Profile picture"
        leftIcon={{ type: 'material', name: 'face' }}
        value={imageURL}
        onChangeText={text => setImageUrl(text)}
      />
      <Button title="sign up" style={styles.button} />
    </View>
  )
}

export default RegisterScreen

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
