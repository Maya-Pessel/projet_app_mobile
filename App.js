import React from 'react';
import { NativeBaseProvider, View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Loading from "./src/screens/Loading";
import AppPrivate from './src/screens/private';
import ROUTES from "./src/routes";
import "./src/locales/i18n";

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsSignedIn(true);
  //   }, 5_000);
  // }, []);

  // if(true) {
  //   return <Loading />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {true 
        ? (
            <>
              <Stack.Screen name="AppPrivate" component={AppPrivate} options={{ header: () => null }} />
              {ROUTES.map(route => {
                if (route.layout === "/private" && !route.menuTab && route.screen) {
                  return <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.screen}
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
        <AppContainer />
      </View>
    </NativeBaseProvider>
  );
}
