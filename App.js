import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Public from './src/screens/public';
import { NativeBaseProvider, Text, View } from 'native-base';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Public.Login}
          options={{ title: 'Welcome' }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
