import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Home, Map, Profil, Communauté, Qrcode} from './App/screen'; 
import LoginForm from './App/screen/login';
import Kungs from './App/screen/Kungs';
import Lauwend from './App/screen/Lauwend';
import Myd from './App/screen/Myd';
import Vaent from './App/screen/Vaent';
import Biscuit from './App/screen/Biscuit';
import Billetterie from './App/screen/Billetterie';
import Infos from './App/screen/Infos';



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
      <Tab.Screen name="Home" component={Home} options = {{tabBarShowLabel : false,  headerShown: false}}/>
      <Tab.Screen name="Map" component={Map} options = {{tabBarShowLabel : false,  headerShown: false}} />
      <Tab.Screen name="QrCode" component={Qrcode} options = {{tabBarShowLabel : false,  headerShown: false}}/>
      <Tab.Screen name="Communauté" component={Communauté} options = {{tabBarShowLabel : false,  headerShown: false}}/>
      <Tab.Screen name="Profil" component={Profil} options = {{tabBarShowLabel : false,  headerShown: false}}/>    
    </Tab.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name='Kungs' component= {Kungs}/> 
        <Stack.Screen name='Lauwend' component= {Lauwend}/> 
        <Stack.Screen name='Myd' component= {Myd}/> 
        <Stack.Screen name='Biscuit' component= {Biscuit}/> 
        <Stack.Screen name='Vaent' component= {Vaent}/> 
        <Stack.Screen name='Billetterie' component= {Billetterie}/> 
        <Stack.Screen name='Infos' component= {Infos}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
export { HomeTab };
