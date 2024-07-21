import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import StationScreen from '../Screens/StationScreen';
import CameraScreen from '../Screens/CameraScreen';
import LearnScreen from '../Screens/LearnScreen';
import AccountScreen from '../Screens/AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#18654a',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../Assets/Icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                  alignSelf: 'center',
                }} />
              <Text style={{ color: 'white' }}>Home</Text>
            </View>
          ),
        }} />
      <Tab.Screen
        name="Station"
        component={StationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../Assets/Icons/triangular-arrows-sign-for-recycle.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                  alignSelf: 'center',
                }} />
              <Text style={{ color: 'white' }}>Station</Text>
            </View>
          ),
        }} />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: '#8a2d57',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              borderRadius: 80,
            }}>
              <Image
                source={require('../Assets/Icons/camera.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? 'red' : 'white',
                  alignSelf: 'center',
                }} />
            </View>
          ),
        }} />
      <Tab.Screen
        name="Wallet"
        component={LearnScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../Assets/Icons/wallet.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                  alignSelf: 'center',
                }} />
              <Text style={{ color: 'white' }}>Wallet</Text>
            </View>
          ),
        }} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../Assets/Icons/account.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'red' : 'white',
                  alignSelf: 'center',
                }} />
              <Text style={{ color: 'white' }}>Account</Text>
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
