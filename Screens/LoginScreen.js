import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

import LoginScreenStyle from '../Styles/LoginScreenStyle';

import auth from '@react-native-firebase/auth';
import HomeScreenStyle from '../Styles/HomeScreenStyle';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);

      navigation.navigate('BottomTabs');
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View style={LoginScreenStyle.Container}>
      <View style={LoginScreenStyle.all} > 
      <View style={LoginScreenStyle.ImageContainer}>
        <Image
          style={{resizeMode: 'contain', height: '100%', width: '100%'}}
          source={require('../Assets/frontImage.png')}></Image>
      </View>

      <View style={LoginScreenStyle.Container1}>
        <Text style={LoginScreenStyle.LoginText}>Login</Text>

        <View style={LoginScreenStyle.EmailContainer}>
          <Image
            style={LoginScreenStyle.EmailImage}
            source={require('../Assets/arroba.png')}
          />
          <TextInput
            style={LoginScreenStyle.input }
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={'gray'}
          
          />
        </View>

        <View style={LoginScreenStyle.EmailContainer}>
          <Image
            style={LoginScreenStyle.PasswordImage}
            source={require('../Assets/locked-computer.png')}
          />
          <TextInput
            style={LoginScreenStyle.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={'gray'}
          />
        </View>

        <TouchableOpacity
          style={LoginScreenStyle.LoginButton}
          onPress={handleLogin}>
          <Text style={LoginScreenStyle.LoginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={LoginScreenStyle.ORText}>OR</Text>

        <TouchableOpacity
          style={LoginScreenStyle.TouchableLink}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={LoginScreenStyle.Link}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default LoginScreen;
