import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home1')} />
    </View>
  );
};

export default Profile;
