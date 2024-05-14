import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Map, Profil, Communauté, Qrcode } from './App/screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
const Tab = createBottomTabNavigator();
const ScreenOptions = {
  tabBarshowLabel: false,
   headerShows : false,
   tabBarstyle : {
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     elevation: 0,
     background: '#ffffff',
     height: 60,
}
}

export default function App() {
  return (
    <NavigationContainer ScreenOptions={ScreenOptions}>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen name="Map" 
        component={Map} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen name="QrCode"
         component={Qrcode}
         options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="qrcode" size={24} color="black" />
          ),
         }} />
        <Tab.Screen name="Communauté"
         component={Communauté}
         options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="black" />
          ),
         
         }} />
        <Tab.Screen name="Profil"
         component={Profil}
         options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
         }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
