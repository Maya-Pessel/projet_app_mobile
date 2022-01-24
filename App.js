import * as React from 'react';
import { NativeBaseProvider, View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Loading from "./src/screens/Loading";
import AppPrivate from './src/screens/private';
import ROUTES from "./src/routes";

const Stack = createNativeStackNavigator();

const AppContainer = ({ isSignedIn = true}) => {

  // if(true) {
  //   return <Loading />;
  // }
  const optionsProps = {
    options: {
      header: () => null,
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {isSignedIn 
        ? (
          <Stack.Screen name="AppPrivate" component={AppPrivate} {...optionsProps} />
        ) : (
          <Stack.Group  screenOptions={{ headerShown: false }}>
              {ROUTES.map(route => {
                if (route.layout === "/public" && route.screen) {
                  return <Stack.Screen
                    key={route.name}
                    name={route.layout + "/" + route.name}
                    component={route.screen}
                    options={{
                      header: () => null,
                    }}
                  />
                }
                return null;
              })}
          </Stack.Group>
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default function() {
  return (
    <NativeBaseProvider>
      <View h="full">
        <AppContainer />
      </View>
    </NativeBaseProvider>
  );
}
