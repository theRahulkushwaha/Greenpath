import { View, Text ,Button,StyleSheet} from 'react-native';
import React from 'react';
;
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>WelcomeScreen</Text>
      <Text style={styles.text}>Login</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Login')}
      />
      <Text style={styles.text}>Signup</Text>
      <Button title="Go to signup"
       onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
});