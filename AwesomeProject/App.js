import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Home, Map, Profil, Communauté, Qrcode } from './App/screen'; // Ensure these are correctly imported
import LoginForm from './App/screen/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 60,
  },
};

function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Map') {
            iconName = 'map-pin';
            return <Feather name={iconName} size={24} color={color} />;
          } else if (route.name === 'QrCode') {
            iconName = 'qrcode';
          } else if (route.name === 'Communauté') {
            iconName = 'team';
          } else if (route.name === 'Profil') {
            iconName = 'user';
          }
          return <AntDesign name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="QrCode" component={Qrcode} />
      <Tab.Screen name="Communauté" component={Communauté} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
export { HomeTab };