import React from "react"; 
import { View,Text,TouchableOpacity, StyleSheet } from "react-native";

import RecycleScreen from "../Screens/RecycleScreen";
import CamaraScreen from "../Screens/CamaraScreen";
import WalletScreen from "../Screens/WalletScreen";
import AccountScreen from "../Screens/AccountScreen";
import StackNavigator from "./StackNavigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
        return(
            <Tab.Navigator 
            tabBarOption={{
                showlabel :false,
                style:{
                    position:'absolute',
                    bottom:25,
                    left:20,
                    right:20,
                    elevation:0,
                    backgroundColor:'black'
                }
                }}  >

                <Tab.Screen name="Home" component={StackNavigator}  options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Recycle" component={RecycleScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Camara" component={CamaraScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Wallet" component={WalletScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name="Account" component={AccountScreen} options={{headerShown: false}}></Tab.Screen>

            </Tab.Navigator>
        );
};

export default BottomTabNavigator;