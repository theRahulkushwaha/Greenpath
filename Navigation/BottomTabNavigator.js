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
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 10,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: '#18654a',
          borderRadius:0,
          height: 60,
        },
      }}>
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
                  alignSelf:'center',
                }}></Image>

              <Text style={{
                color:'white',
              }}>Home</Text>
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
                  alignSelf:'center',
                }}></Image>

              <Text style={{
                color:'white',
              }}>Recycle</Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Camara"
        component={CamaraScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{backgroundColor:'#8a2d57',
              height:'100%',
              width:'100%',
              justifyContent:'center',
              borderRadius:80,
              
            }}>
              <Image
                source={require('../Assets/Icons/camera.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 45,
                   tintColor: focused ? 'red' : 'white',
                  alignSelf:'center',
                
                  
                }}></Image>

              {/* <Text style={{
                color:'white',
              }}>Camara</Text> */}
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
                  alignSelf:'center',
                }}></Image>

              <Text style={{
                color:'white',
              }}>Wallet</Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/Icons/account.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                   tintColor: focused ? 'red' : 'white',
                  alignSelf:'center',
                }}></Image>

              <Text style={{
                color:'white',
              }}>Account</Text>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
