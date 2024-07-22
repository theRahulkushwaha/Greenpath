import React from "react";
import { Text,View,Button,StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth';


const signOut = async() => {
    try {
        await auth().signOut();
        console.log('User Signed Out!')
    } catch (error) {
        console.error(error);
    }
};


const AccountScreen = () => {
    return(
        <View>
            <Text>
                AccountScreen
            </Text>
            <Text>TO signOut</Text>
            <Button title="Signed out" onPress={signOut} >
                
            </Button>
        </View>
    );
};

export default AccountScreen;