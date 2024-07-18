import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

import BottomTabNavigator from './BottomTabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigator/>
      {/* <StackNavigator /> */}
      
    </NavigationContainer>
  );
};

export default AppNavigator;
