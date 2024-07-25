import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SignupScreenStyle from '../Styles/SignupScreenStyle';

import auth from '@react-native-firebase/auth';
import LoginScreen from './LoginScreen';

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User account created & signed in!');
        navigation.navigate('BottomTabs');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
      });
  };

  return (
    <View style={SignupScreenStyle.Container}>
      <View style={SignupScreenStyle.all}>
        <View style={SignupScreenStyle.Imagecontainer}>
          <Image
            style={SignupScreenStyle.Image}
            source={require('../Assets/SignupBg.png')}
          />
        </View>
        <View style={SignupScreenStyle.EnterDataContainer}>
          <Text style={SignupScreenStyle.SignUpText}>SignUp</Text>

          <TextInput
            style={SignupScreenStyle.Placeholder}
            placeholder="Name"
            // value={name}
            placeholderTextColor={'gray'}
          />
          <TextInput
            style={SignupScreenStyle.Placeholder}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={'gray'}
          />

          <TextInput
            style={SignupScreenStyle.Placeholder}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={'gray'}
          />

          <TextInput
            style={SignupScreenStyle.Placeholder}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={SignupScreenStyle.Button}>
          <TouchableOpacity style={SignupScreenStyle.SignupButtonContainer} onPress={handleSignUp}>
            <Text style={SignupScreenStyle.ButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View Style={SignupScreenStyle.ORandAlready}>
            <Text style={SignupScreenStyle.ORText}>OR</Text>

            <TouchableOpacity style={SignupScreenStyle.AlreadyTextContainer}>
              <Text style={SignupScreenStyle.AlreadyText} onPress={()=> navigation.navigate('Login')}>Already have an account? Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
