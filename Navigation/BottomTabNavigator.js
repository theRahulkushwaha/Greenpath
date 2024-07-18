import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import RecycleScreen from '../Screens/RecycleScreen';
import CamaraScreen from '../Screens/CamaraScreen';
import WalletScreen from '../Screens/WalletScreen';
import AccountScreen from '../Screens/AccountScreen';
import StackNavigator from './StackNavigator';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
        showLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#18654a',
          borderRadius: 15,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/Icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                }}></Image>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Recycle"
        component={RecycleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/Icons/triangular-arrows-sign-for-recycle.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                }}></Image>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Camara"
        component={CamaraScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/Icons/camera.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                }}></Image>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/Icons/wallet.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                }}></Image>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/Icons/account.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                }}></Image>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
