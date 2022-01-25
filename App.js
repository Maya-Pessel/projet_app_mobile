import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { I18nextProvider, useTranslation } from 'react-i18next';
import Loading from "./src/screens/Loading";
import AppPrivate from './src/screens/private';
import ROUTES from "./src/routes";
import i18n from "./src/locales/i18n";

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  const { t } = useTranslation("Private");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsSignedIn(true);
  //   }, 5000);
  // }, []);

  if(true) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {isSignedIn 
        ? (
            <>
              <Stack.Screen name="AppPrivate" component={AppPrivate} options={{ header: () => null }} />
              {ROUTES.map(route => {
                if (route.layout === "/private" && !route.menuTab && route.screen) {
                  return <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.screen}
                    options={{
                      title: t(`${route.name}.head_title`),
                    }}
                  />
                }
                return null;
              })}
            </>
        ) : (
          <Stack.Group  screenOptions={{ headerShown: false }}>
              {ROUTES.map(route => {
                if (route.layout === "/public" && route.screen) {
                  return <Stack.Screen
                    key={route.name}
                    name={route.layout + "/" + route.name}
                    component={route.screen}
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
        <I18nextProvider i18n={i18n}>
          <AppContainer />
        </I18nextProvider>
      </View>
    </NativeBaseProvider>
  );
}
