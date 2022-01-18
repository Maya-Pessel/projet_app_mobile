import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Public from './src/screens/public';
import Private from "./src/screens/private";
import { NativeBaseProvider, Text, View } from 'native-base';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Public */}
        <Stack.Screen
          name="Login"
          component={Public.Login}
          options={{ title: 'Welcome' }}
        />

        {/* Private */}
        <Stack.Screen name="Home" component={Private.Home} />
          <Stack.Screen name="Profile" component={Private.Profile} />
          <Stack.Screen name="Message" component={Private.Message} />
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
