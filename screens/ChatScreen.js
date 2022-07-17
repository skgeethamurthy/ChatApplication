import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { auth } from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-gifted-chat'
const ChatScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        const photoURL = auth?.currentUser?.photoURL
        navigation.setOptions({
            headerLeft:() => (
                <View style={{marginLeft: 20}}>
                <Avatar
                rouded
                source={{
                    uri:photoURL
                }}
                />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 30
                }}
                onPress={signOut}>
                <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
        )
        })
    }, [])
    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        }).catch((error) => {

        });
    }
    return (
        <View>
            <Text>ChatScreen</Text>
        </View>
    )
}

export default ChatScreen