import React from 'react';
import { View, Text ,Button,StyleSheet, Image, TouchableOpacity} from 'react-native';

import WelcomeScreenStyle from '../Styles/WelcomeScreenStyle';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

export default function WelcomeScreen({ navigation }) {
  return (
      <View style={WelcomeScreenStyle.container}>

            <View style={WelcomeScreenStyle.ImageContainer}>
                <Image style={WelcomeScreenStyle.Image} source={require('../Assets/truck1.png')} />
            </View>

          <View style={WelcomeScreenStyle.Text}>
            <Text style={WelcomeScreenStyle.WelcomeText}>Welcome,</Text>
            <Text style={WelcomeScreenStyle.TOGreenPathText}>To GreenPath</Text>
            <Text style={WelcomeScreenStyle.ReadyText}>Ready to Turn Trash into Treasure?</Text>
          </View>

        <TouchableOpacity onPress={()=> navigation.navigate('Login')} 
        style={WelcomeScreenStyle.GetStartedButton} >
          <Text style={WelcomeScreenStyle.GetStartedButtonText}>Get Started</Text>
        </TouchableOpacity>

      </View>
  );
};

