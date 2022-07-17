import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageURL, setImageUrl] = useState('');

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 696
        var user = userCredential.user;
        // const user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
          photoURL: imageURL ? imageURL : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
        }).then(() => {
          // Update successful
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        // ...
        navigation.popToTop();
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  }
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Name"
        label="Name"
        leftIcon={{ type: 'material', name: 'badge' }}
        value={name}
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
      <Button title="sign up" onPress={register} style={styles.button} />
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
