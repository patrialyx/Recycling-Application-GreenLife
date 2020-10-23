import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../Pages/HomeScreen'       
import Deposit from '../Pages/Deposit'
import Education from '../Pages/Education'
import Settings from '../Pages/Settings'

import {HomeScreenStackNavigator, LocationStackNavigator, ScanStackNavigator, EducationStackNavigator, SettingsStackNavigator} from './StackNavigator'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreenStackNavigator}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Location"
        component={LocationStackNavigator}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanStackNavigator}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={EducationStackNavigator}
        options={{
          tabBarLabel: 'Education',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
