import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import AuthNavigator from './AuthNavigator';
import auth from '@react-native-firebase/auth';

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
