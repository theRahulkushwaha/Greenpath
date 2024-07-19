import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import AppNavigator from './Navigation/AppNavigator';

const GreenPath = () => {
    return (

      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default GreenPath;
